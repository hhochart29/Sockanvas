import { handleClick } from './three/index'
import TweenMax from 'gsap'

window.socket.on('shotData', (client, data) => {
  handleClick(data.touchSpeed, data.touchAngle)
  const popup = document.querySelector('.popup')
  if (popup.innerHTML !== '')
    popup.innerHTML = ''
  popup.innerHTML = 'Le joueur ' + client.name + ' vient d\'effectuer un tir avec l\'angle ' + data.touchAngle + ' et d\'une puissance de ' + data.touchSpeed
  TweenMax.to(popup, .5, {autoAlpha: 1})
  setTimeout(() => {
    TweenMax.to(popup, .5, {autoAlpha: 0})
  }, 2000)
})