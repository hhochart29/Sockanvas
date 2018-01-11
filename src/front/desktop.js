import {handleClick} from './three/index'

window.socket.on('shotData', (client, data) => {
  handleClick(data.touchSpeed, data.touchAngle)
  const popup = document.querySelector('.popup')
  if(popup.innerHTML !== '')
    popup.innerHTML = ''
  popup.innerHTML = 'Le joueur ' + client.name + ' vient d\'effectuer un tir avec l\'angle ' + data.touchAngle + ' et d\'une puissance de ' + data.touchSpeed
})