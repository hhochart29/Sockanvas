import io from 'socket.io-client'

// let instance = null
//
// class SocketConnection {
//
//   constructor () {
//     if (!instance) {
//       instance = this
//     }
//     this.io = io('http://192.168.0.11:1337') //home
//     return instance
//   }
// }
//
// export let socketConnection = new SocketConnection()

const socketConnection = {
  _instance: null,
  get instance () {
    if (!this._instance) {
      this._instance = {
        setConnection () {
          return io('http://192.168.0.11:1337')
        },
      }
    }
    return this._instance
  }
}

export default socketConnection