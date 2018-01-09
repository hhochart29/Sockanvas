const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const plugins = []

if (process.env.NODE_ENV === 'production') {
  plugins.push(new UglifyJSPlugin())
  plugins.push(new HtmlWebpackPlugin({
    title: 'Sockanvas - BeerPong interactif'
  }))
}

module.exports = {
  entry: {
    socket: ['./src/front/socket.js'],
    bundle: ['./src/front/main.js'],
    device: ['./src/front/device.js']
  },
  devtool: 'eval-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: 'style-loader' // creates style nodes from JS strings
      }, {
        loader: 'css-loader' // translates CSS into CommonJS
      }, {
        loader: 'sass-loader' // compiles Sass to CSS
      }]
    },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          }
        }
      }
    ]
  },
  plugins,
  devServer: {
    host: '0.0.0.0',
    // hot: true,
    port: 4000
  }
}