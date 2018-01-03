window.socket.on('shotData', (client, data) => {
  const popup = document.querySelector('.popup')
  if(popup.innerHTML !== '')
    popup.innerHTML = ''
  console.log(window.socket)
  popup.innerHTML = 'Le joueur ' + client.name + ' vient d\'effectuer un tir avec l\'angle ' + data.touchAngle + ' et d\'une puissance de ' + data.touchSpeed
})