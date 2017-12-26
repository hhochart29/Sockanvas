import io from 'socket.io-client'

export const socketConnection = io('http://192.168.1.15:1337')