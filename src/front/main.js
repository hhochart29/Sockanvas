import socketConnection from './socket'
require('./styles/main.scss')

console.log(socketConnection)

// instance.on('connect', (client) => {
//   instance.emit('emitURL', window.location.pathname)

//   let type = ''
//   if (navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)) {
//     type = 'device'
//   } else {
//     type = 'desktop'
//   }
//   instance.emit('clientConnect', {id: instance.id, type: type})
// })

// /*
// * Debug to display informations about a client / clients
// */
// instance.on('displayClientInfo', (clientDebug) => {
//   console.log(clientDebug)
// })

// /*
// * Redirect to the desired URL
// * */
// instance.on('redirect', (url) => {
//   window.location.href = window.location.origin + url
// })