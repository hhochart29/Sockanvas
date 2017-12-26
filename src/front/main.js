require('./styles/main.scss')
import {socketConnection }from './socket'

console.log(socketConnection)

// export class Main {
//   constructor() {
//     notifications.add('yolo 1 from main');
//
//     create new children
//     (they send messages in constructor)
    // let child1 = new Child('le child 1');
    // let child2 = new Child('le child 2');
    //
    // send second message from main
    // notifications.add('yolo 2 from main');
  // }
// }

// boostrap
// document.addEventListener("DOMContentLoaded", (e) => new Main());

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