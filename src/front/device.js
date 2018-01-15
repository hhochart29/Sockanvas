import ballImg from './img/ball.png'

var deltaY, startX, startY, x, y, deltaX, startTime, endTime, deltaTime, speed, angle
var data = {}

const datas = {
  info1: "Après consommation, l’alcool est absorbé tel quel au niveau de l’intestin grêle et passe dans le sang. En quelques minutes, il est transporté dans tout l’organisme, notamment au niveau du cerveau.",
  info2: "L’alcool est éliminé essentiellement par le foie (95 %). Les 5 % restants sont éliminés par les reins (urine), la peau (sueur), les poumons (air expiré) et la salive. Le passage par la respiration permet d’évaluer, en mesurant la concentration d’alcool dans l’air expiré au moyen d’un éthylotest, le taux d’alcool dans le sang (ou alcoolémie).",
  info3: "En conduisant avec un taux d'alcoolémie compris entre 0,50 g/l et 0,80 g/l de sang, je commets une infraction, je risque une amende forfaitaire de 135 euros ainsi que la perte de 6 points sur mon permis de conduire. ",
  info4: "En conduisant avec un taux d'alcoolémie supérieur à 0,80 g/l de sang, je commets un délit, je risque jusqu'à 2 ans d'emprisonnement, 4500 euros d'amende, la suspension de mon permis (pour une durée pouvant aller jusqu'à 3 ans) ainsi que la perte de 6 points sur mon permis de conduire.",
  info5: "Pour conduire, mon taux d'alcoolémie doit être inférieur à 0,50 g/l de sang (soit 0,25 mg/l d'air expiré) ce qui correspond à deux verres en moyenne.",
  info6: "En moyenne, les effets de l'alcool se font sentir dès 0,30 g/l de sang."
}

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight - 90

const ballWidth = 60
const barInfo = document.getElementById('info')

const progressBarColors = ['#e74c3c', '#d35400', '#e67e22', '#f1c40f', '#2ecc71']
const progressBarContent = document.querySelectorAll('#progressBar > div')

//Création de la balle
var ballImage = new Image()
ballImage.src = ballImg

//Progress bar
for(let i = 0; i < progressBarContent.length; i++) {
  progressBarContent[i].style.backgroundColor = progressBarColors[i]
}

//On appel chaque évènement liés au touché de l'écran
window.addEventListener('touchstart', handleStart, false)
window.addEventListener('touchend', handleEnd, false)
window.addEventListener('touchmove', handleMove, false)

//Fonction appelée lors du touché de l'écran
function handleStart (event) {
  startTime = new Date().getTime()
  startY = event.touches[0].pageY
  startX = event.touches[0].pageX
}

//Fonction appelé lors d'un mouvement sur l'écran
function handleMove (event) {
  x = event.touches[0].pageX
  y = event.touches[0].pageY
  deltaX = startX - x
  deltaY = startY - y
  if (deltaY < 0) {
    deltaY = - deltaY
  }
  angle = Math.sin(deltaX / deltaY) * 180 / Math.PI
  angle = angle.toFixed(2)
  data.touchAngle = angle
  document.getElementById('touchAngle').innerHTML = 'Angle : ' + data.touchAngle

  ball.x = x - 65
  ball.y = y - 65
}


//Fonction appelée lors de la fin du touché de l'écran
function handleEnd (event) {
  endTime = new Date().getTime()
  deltaTime = endTime - startTime
  speed = deltaY / deltaTime
  speed = Math.floor(speed * 10)
  data.touchSpeed = speed

  //On emet les donnees vers le server
  window.socket.emit('clientAction', data)
  console.log("Data : " + data)

  document.getElementById('touchSpeed').innerHTML = 'Speed : ' + data.touchSpeed

  // ball.dx = speed
  ball.dy = speed
}

//Canvas

function Circle(positionX, positionY, dx, dy, width, height) {
  this.x = positionX
  this.y = positionY
  this.dx = dx
  this.dy = dy
  this.width = width
  this.height = height

  this.draw = function() {
    ctx.drawImage(ballImage, this.x, this.y, this.width, this.height)
  }

  this.update = function() {
    if(this.y + 150 < 0) {
      showInfo()
      init(false)
      setTimeout(function(){
        init(true)
      }, 6000)
    }
    this.x += -this.dx
    this.y += -this.dy
    this.draw()
  }
}

function showInfo() {
  barInfo.style.top = '20px'
  let min = Math.ceil(1)
  let max = Math.floor(6)
  let infoId = Math.floor(Math.random() * (max - min + 1)) + min
  let infoNumber = "info" + infoId
  barInfo.innerHTML = datas[infoNumber]
  hideInfo()
}

function hideInfo() {
  setTimeout(function () {
    barInfo.style.top = '-200px'
  }, 6000)
}

var ball
function init(param) {
  let para = param
  if(para === true) {
    ball = new Circle(canvas.width / 2 - 65, canvas.height - 150, 0, 0, 130, 130)
  } else {
    ball = new Circle(0, 0, 0, 0, 0, 0)
  }
}

function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, innerWidth, innerHeight)
  ball.update()
}

init(true)
animate()
