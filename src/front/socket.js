import io from 'socket.io-client'

const socketConnection = io('http://127.0.0.1:1337')
export default socketConnection