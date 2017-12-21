require('./styles/main.scss')

import socket from './socket'
console.log(socket.instance.setConnection())

// socketConnection.c.on('connect', (client) => {
//   socketConnection.c.emit('emitURL', window.location.pathname)
//
//   let type = ''
//   if (navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)) {
//     type = 'device'
//   } else {
//     type = 'desktop'
//   }
//   socketConnection.c.emit('clientConnect', {id: socketConnection.c.id, type: type})
// })
//
// /*
// * Debug to display informations about a client / clients
// */
// socketConnection.c.on('displayClientInfo', (clientDebug) => {
//   console.log(clientDebug)
// })
//
// /*
// * Redirect to the desired URL
// * */
// socketConnection.c.on('redirect', (url) => {
//   window.location.href = window.location.origin + url
// })