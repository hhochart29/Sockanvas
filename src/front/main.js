import io from 'socket.io-client'

require('./styles/main.scss')

window.socket = io('http://192.168.1.205:1337')

window.socket.on('connect', (client) => {
  window.socket.emit('emitURL', window.location.pathname)

  let type = ''
  if (navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)) {
    type = 'device'
  } else {
    type = 'desktop'
  }
  window.socket.emit('clientConnect', {id: window.socket.id, type: type})
})

/*
* Debug to display informations about a client / clients
*/
window.socket.on('displayClientInfo', (clientDebug) => {
  console.log(clientDebug)
})

/*
* Redirect to the desired URL
* */
window.socket.on('redirect', (url) => {
  window.location.href = window.location.origin + url
})
