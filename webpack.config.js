const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

const plugins = [
  new webpack.ProvidePlugin({
    THREE: 'three'
  })
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(new UglifyJSPlugin())
}

module.exports = {
  entry: {
    bundle: './src/front/main.js',
    device: './src/front/device.js',
    desktop: './src/front/desktop.js',
    three: './src/front/three/index.js'
  },
  devtool: 'eval-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins
}