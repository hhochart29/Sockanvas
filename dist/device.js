/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ({

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_ball_png__ = __webpack_require__(68);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_ball_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__img_ball_png__);\n\n\nvar deltaY, startX, startY, x, y, deltaX, startTime, endTime, deltaTime, speed, angle\nvar data = {}\n\nconst datas = {\n  info1: \"Après consommation, l’alcool est absorbé tel quel au niveau de l’intestin grêle et passe dans le sang. En quelques minutes, il est transporté dans tout l’organisme, notamment au niveau du cerveau.\",\n  info2: \"L’alcool est éliminé essentiellement par le foie (95 %). Les 5 % restants sont éliminés par les reins (urine), la peau (sueur), les poumons (air expiré) et la salive. Le passage par la respiration permet d’évaluer, en mesurant la concentration d’alcool dans l’air expiré au moyen d’un éthylotest, le taux d’alcool dans le sang (ou alcoolémie).\",\n  info3: \"En conduisant avec un taux d'alcoolémie compris entre 0,50 g/l et 0,80 g/l de sang, je commets une infraction, je risque une amende forfaitaire de 135 euros ainsi que la perte de 6 points sur mon permis de conduire. \",\n  info4: \"En conduisant avec un taux d'alcoolémie supérieur à 0,80 g/l de sang, je commets un délit, je risque jusqu'à 2 ans d'emprisonnement, 4500 euros d'amende, la suspension de mon permis (pour une durée pouvant aller jusqu'à 3 ans) ainsi que la perte de 6 points sur mon permis de conduire.\",\n  info5: \"Pour conduire, mon taux d'alcoolémie doit être inférieur à 0,50 g/l de sang (soit 0,25 mg/l d'air expiré) ce qui correspond à deux verres en moyenne.\",\n  info6: \"En moyenne, les effets de l'alcool se font sentir dès 0,30 g/l de sang.\"\n}\n\nconst canvas = document.querySelector('canvas')\nconst ctx = canvas.getContext('2d')\n\ncanvas.width = window.innerWidth\ncanvas.height = window.innerHeight - 90\n\nconst ballWidth = 60\nconst barInfo = document.getElementById('info')\n\nconst progressBarColors = ['#e74c3c', '#d35400', '#e67e22', '#f1c40f', '#2ecc71']\nconst progressBarContent = document.querySelectorAll('#progressBar > div')\n\n//Création de la balle\nvar ballImage = new Image()\nballImage.src = __WEBPACK_IMPORTED_MODULE_0__img_ball_png___default.a\n\n//Progress bar\nfor(let i = 0; i < progressBarContent.length; i++) {\n  progressBarContent[i].style.backgroundColor = progressBarColors[i]\n}\n\n//On appel chaque évènement liés au touché de l'écran\nwindow.addEventListener('touchstart', handleStart, false)\nwindow.addEventListener('touchend', handleEnd, false)\nwindow.addEventListener('touchmove', handleMove, false)\n\n//Fonction appelée lors du touché de l'écran\nfunction handleStart (event) {\n  startTime = new Date().getTime()\n  startY = event.touches[0].pageY\n  startX = event.touches[0].pageX\n}\n\n//Fonction appelé lors d'un mouvement sur l'écran\nfunction handleMove (event) {\n  x = event.touches[0].pageX\n  y = event.touches[0].pageY\n  deltaX = startX - x\n  deltaY = startY - y\n  if (deltaY < 0) {\n    deltaY = - deltaY\n  }\n  angle = Math.sin(deltaX / deltaY) * 180 / Math.PI\n  angle = angle.toFixed(2)\n  data.touchAngle = angle\n  document.getElementById('touchAngle').innerHTML = 'Angle : ' + data.touchAngle\n\n  ball.x = x - 65\n  ball.y = y - 65\n}\n\n\n//Fonction appelée lors de la fin du touché de l'écran\nfunction handleEnd (event) {\n  endTime = new Date().getTime()\n  deltaTime = endTime - startTime\n  speed = deltaY / deltaTime\n  speed = Math.floor(speed * 10)\n  data.touchSpeed = speed\n\n  //On emet les donnees vers le server\n  window.socket.emit('clientAction', data)\n  console.log(\"Data : \" + data)\n\n  document.getElementById('touchSpeed').innerHTML = 'Speed : ' + data.touchSpeed\n\n  // ball.dx = speed\n  ball.dy = speed\n}\n\n//Canvas\n\nfunction Circle(positionX, positionY, dx, dy, width, height) {\n  this.x = positionX\n  this.y = positionY\n  this.dx = dx\n  this.dy = dy\n  this.width = width\n  this.height = height\n\n  this.draw = function() {\n    ctx.drawImage(ballImage, this.x, this.y, this.width, this.height)\n  }\n\n  this.update = function() {\n    if(this.y + 150 < 0) {\n      showInfo()\n      init(false)\n      setTimeout(function(){\n        init(true)\n      }, 6000)\n    }\n    this.x += -this.dx\n    this.y += -this.dy\n    this.draw()\n  }\n}\n\nfunction showInfo() {\n  barInfo.style.top = '20px'\n  let min = Math.ceil(1)\n  let max = Math.floor(6)\n  let infoId = Math.floor(Math.random() * (max - min + 1)) + min\n  let infoNumber = \"info\" + infoId\n  barInfo.innerHTML = datas[infoNumber]\n  hideInfo()\n}\n\nfunction hideInfo() {\n  setTimeout(function () {\n    barInfo.style.top = '-200px'\n  }, 6000)\n}\n\nvar ball\nfunction init(param) {\n  let para = param\n  if(para === true) {\n    ball = new Circle(canvas.width / 2 - 65, canvas.height - 150, 0, 0, 130, 130)\n  } else {\n    ball = new Circle(0, 0, 0, 0, 0, 0)\n  }\n}\n\nfunction animate() {\n  requestAnimationFrame(animate)\n  ctx.clearRect(0, 0, innerWidth, innerHeight)\n  ball.update()\n}\n\ninit(true)\nanimate()\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvZGV2aWNlLmpzP2U0ODciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYywrQkFBK0I7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6IjY3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhbGxJbWcgZnJvbSAnLi9pbWcvYmFsbC5wbmcnXG5cbnZhciBkZWx0YVksIHN0YXJ0WCwgc3RhcnRZLCB4LCB5LCBkZWx0YVgsIHN0YXJ0VGltZSwgZW5kVGltZSwgZGVsdGFUaW1lLCBzcGVlZCwgYW5nbGVcbnZhciBkYXRhID0ge31cblxuY29uc3QgZGF0YXMgPSB7XG4gIGluZm8xOiBcIkFwcsOocyBjb25zb21tYXRpb24sIGzigJlhbGNvb2wgZXN0IGFic29yYsOpIHRlbCBxdWVsIGF1IG5pdmVhdSBkZSBs4oCZaW50ZXN0aW4gZ3LDqmxlIGV0IHBhc3NlIGRhbnMgbGUgc2FuZy4gRW4gcXVlbHF1ZXMgbWludXRlcywgaWwgZXN0IHRyYW5zcG9ydMOpIGRhbnMgdG91dCBs4oCZb3JnYW5pc21lLCBub3RhbW1lbnQgYXUgbml2ZWF1IGR1IGNlcnZlYXUuXCIsXG4gIGluZm8yOiBcIkzigJlhbGNvb2wgZXN0IMOpbGltaW7DqSBlc3NlbnRpZWxsZW1lbnQgcGFyIGxlIGZvaWUgKDk1ICUpLiBMZXMgNSAlIHJlc3RhbnRzIHNvbnQgw6lsaW1pbsOpcyBwYXIgbGVzIHJlaW5zICh1cmluZSksIGxhIHBlYXUgKHN1ZXVyKSwgbGVzIHBvdW1vbnMgKGFpciBleHBpcsOpKSBldCBsYSBzYWxpdmUuIExlIHBhc3NhZ2UgcGFyIGxhIHJlc3BpcmF0aW9uIHBlcm1ldCBk4oCZw6l2YWx1ZXIsIGVuIG1lc3VyYW50IGxhIGNvbmNlbnRyYXRpb24gZOKAmWFsY29vbCBkYW5zIGzigJlhaXIgZXhwaXLDqSBhdSBtb3llbiBk4oCZdW4gw6l0aHlsb3Rlc3QsIGxlIHRhdXggZOKAmWFsY29vbCBkYW5zIGxlIHNhbmcgKG91IGFsY29vbMOpbWllKS5cIixcbiAgaW5mbzM6IFwiRW4gY29uZHVpc2FudCBhdmVjIHVuIHRhdXggZCdhbGNvb2zDqW1pZSBjb21wcmlzwqBlbnRyZSAwLDUwIGcvbCBldCAwLDgwIGcvbMKgZGUgc2FuZywgamUgY29tbWV0cyB1bmXCoGluZnJhY3Rpb24sIGplIHJpc3F1ZSB1bmUgYW1lbmRlIGZvcmZhaXRhaXJlIGRlIDEzNSBldXJvcyBhaW5zaSBxdWUgbGEgcGVydGUgZGUgNiBwb2ludHMgc3VyIG1vbiBwZXJtaXMgZGUgY29uZHVpcmUuIFwiLFxuICBpbmZvNDogXCJFbiBjb25kdWlzYW50IGF2ZWMgdW4gdGF1eCBkJ2FsY29vbMOpbWllwqBzdXDDqXJpZXVyIMOgIDAsODAgZy9swqBkZSBzYW5nLCBqZSBjb21tZXRzIHVuwqBkw6lsaXQsIGplIHJpc3F1ZSBqdXNxdSfDoCAyIGFucyBkJ2VtcHJpc29ubmVtZW50LCA0NTAwIGV1cm9zIGQnYW1lbmRlLCBsYSBzdXNwZW5zaW9uIGRlIG1vbiBwZXJtaXMgKHBvdXIgdW5lIGR1csOpZSBwb3V2YW50IGFsbGVyIGp1c3F1J8OgIDMgYW5zKSBhaW5zaSBxdWUgbGEgcGVydGUgZGUgNiBwb2ludHMgc3VyIG1vbiBwZXJtaXMgZGUgY29uZHVpcmUuXCIsXG4gIGluZm81OiBcIlBvdXIgY29uZHVpcmUsIG1vbiB0YXV4IGQnYWxjb29sw6ltaWUgZG9pdCDDqnRyZSBpbmbDqXJpZXVyIMOgIDAsNTAgZy9sIGRlIHNhbmcgKHNvaXQgMCwyNSBtZy9sIGQnYWlyIGV4cGlyw6kpIGNlIHF1aSBjb3JyZXNwb25kIMOgIGRldXggdmVycmVzIGVuIG1veWVubmUuXCIsXG4gIGluZm82OiBcIkVuIG1veWVubmUsIGxlcyBlZmZldHMgZGUgbCdhbGNvb2wgc2UgZm9udCBzZW50aXIgZMOocyAwLDMwIGcvbCBkZSBzYW5nLlwiXG59XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDkwXG5cbmNvbnN0IGJhbGxXaWR0aCA9IDYwXG5jb25zdCBiYXJJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8nKVxuXG5jb25zdCBwcm9ncmVzc0JhckNvbG9ycyA9IFsnI2U3NGMzYycsICcjZDM1NDAwJywgJyNlNjdlMjInLCAnI2YxYzQwZicsICcjMmVjYzcxJ11cbmNvbnN0IHByb2dyZXNzQmFyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwcm9ncmVzc0JhciA+IGRpdicpXG5cbi8vQ3LDqWF0aW9uIGRlIGxhIGJhbGxlXG52YXIgYmFsbEltYWdlID0gbmV3IEltYWdlKClcbmJhbGxJbWFnZS5zcmMgPSBiYWxsSW1nXG5cbi8vUHJvZ3Jlc3MgYmFyXG5mb3IobGV0IGkgPSAwOyBpIDwgcHJvZ3Jlc3NCYXJDb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gIHByb2dyZXNzQmFyQ29udGVudFtpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwcm9ncmVzc0JhckNvbG9yc1tpXVxufVxuXG4vL09uIGFwcGVsIGNoYXF1ZSDDqXbDqG5lbWVudCBsacOpcyBhdSB0b3VjaMOpIGRlIGwnw6ljcmFuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVN0YXJ0LCBmYWxzZSlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZUVuZCwgZmFsc2UpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlTW92ZSwgZmFsc2UpXG5cbi8vRm9uY3Rpb24gYXBwZWzDqWUgbG9ycyBkdSB0b3VjaMOpIGRlIGwnw6ljcmFuXG5mdW5jdGlvbiBoYW5kbGVTdGFydCAoZXZlbnQpIHtcbiAgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgc3RhcnRZID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWVxuICBzdGFydFggPSBldmVudC50b3VjaGVzWzBdLnBhZ2VYXG59XG5cbi8vRm9uY3Rpb24gYXBwZWzDqSBsb3JzIGQndW4gbW91dmVtZW50IHN1ciBsJ8OpY3JhblxuZnVuY3Rpb24gaGFuZGxlTW92ZSAoZXZlbnQpIHtcbiAgeCA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVhcbiAgeSA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVlcbiAgZGVsdGFYID0gc3RhcnRYIC0geFxuICBkZWx0YVkgPSBzdGFydFkgLSB5XG4gIGlmIChkZWx0YVkgPCAwKSB7XG4gICAgZGVsdGFZID0gLSBkZWx0YVlcbiAgfVxuICBhbmdsZSA9IE1hdGguc2luKGRlbHRhWCAvIGRlbHRhWSkgKiAxODAgLyBNYXRoLlBJXG4gIGFuZ2xlID0gYW5nbGUudG9GaXhlZCgyKVxuICBkYXRhLnRvdWNoQW5nbGUgPSBhbmdsZVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG91Y2hBbmdsZScpLmlubmVySFRNTCA9ICdBbmdsZSA6ICcgKyBkYXRhLnRvdWNoQW5nbGVcblxuICBiYWxsLnggPSB4IC0gNjVcbiAgYmFsbC55ID0geSAtIDY1XG59XG5cblxuLy9Gb25jdGlvbiBhcHBlbMOpZSBsb3JzIGRlIGxhIGZpbiBkdSB0b3VjaMOpIGRlIGwnw6ljcmFuXG5mdW5jdGlvbiBoYW5kbGVFbmQgKGV2ZW50KSB7XG4gIGVuZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICBkZWx0YVRpbWUgPSBlbmRUaW1lIC0gc3RhcnRUaW1lXG4gIHNwZWVkID0gZGVsdGFZIC8gZGVsdGFUaW1lXG4gIHNwZWVkID0gTWF0aC5mbG9vcihzcGVlZCAqIDEwKVxuICBkYXRhLnRvdWNoU3BlZWQgPSBzcGVlZFxuXG4gIC8vT24gZW1ldCBsZXMgZG9ubmVlcyB2ZXJzIGxlIHNlcnZlclxuICB3aW5kb3cuc29ja2V0LmVtaXQoJ2NsaWVudEFjdGlvbicsIGRhdGEpXG4gIGNvbnNvbGUubG9nKFwiRGF0YSA6IFwiICsgZGF0YSlcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG91Y2hTcGVlZCcpLmlubmVySFRNTCA9ICdTcGVlZCA6ICcgKyBkYXRhLnRvdWNoU3BlZWRcblxuICAvLyBiYWxsLmR4ID0gc3BlZWRcbiAgYmFsbC5keSA9IHNwZWVkXG59XG5cbi8vQ2FudmFzXG5cbmZ1bmN0aW9uIENpcmNsZShwb3NpdGlvblgsIHBvc2l0aW9uWSwgZHgsIGR5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHRoaXMueCA9IHBvc2l0aW9uWFxuICB0aGlzLnkgPSBwb3NpdGlvbllcbiAgdGhpcy5keCA9IGR4XG4gIHRoaXMuZHkgPSBkeVxuICB0aGlzLndpZHRoID0gd2lkdGhcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcblxuICB0aGlzLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICBjdHguZHJhd0ltYWdlKGJhbGxJbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICB9XG5cbiAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZih0aGlzLnkgKyAxNTAgPCAwKSB7XG4gICAgICBzaG93SW5mbygpXG4gICAgICBpbml0KGZhbHNlKVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICBpbml0KHRydWUpXG4gICAgICB9LCA2MDAwKVxuICAgIH1cbiAgICB0aGlzLnggKz0gLXRoaXMuZHhcbiAgICB0aGlzLnkgKz0gLXRoaXMuZHlcbiAgICB0aGlzLmRyYXcoKVxuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dJbmZvKCkge1xuICBiYXJJbmZvLnN0eWxlLnRvcCA9ICcyMHB4J1xuICBsZXQgbWluID0gTWF0aC5jZWlsKDEpXG4gIGxldCBtYXggPSBNYXRoLmZsb29yKDYpXG4gIGxldCBpbmZvSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG4gIGxldCBpbmZvTnVtYmVyID0gXCJpbmZvXCIgKyBpbmZvSWRcbiAgYmFySW5mby5pbm5lckhUTUwgPSBkYXRhc1tpbmZvTnVtYmVyXVxuICBoaWRlSW5mbygpXG59XG5cbmZ1bmN0aW9uIGhpZGVJbmZvKCkge1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBiYXJJbmZvLnN0eWxlLnRvcCA9ICctMjAwcHgnXG4gIH0sIDYwMDApXG59XG5cbnZhciBiYWxsXG5mdW5jdGlvbiBpbml0KHBhcmFtKSB7XG4gIGxldCBwYXJhID0gcGFyYW1cbiAgaWYocGFyYSA9PT0gdHJ1ZSkge1xuICAgIGJhbGwgPSBuZXcgQ2lyY2xlKGNhbnZhcy53aWR0aCAvIDIgLSA2NSwgY2FudmFzLmhlaWdodCAtIDE1MCwgMCwgMCwgMTMwLCAxMzApXG4gIH0gZWxzZSB7XG4gICAgYmFsbCA9IG5ldyBDaXJjbGUoMCwgMCwgMCwgMCwgMCwgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBpbm5lcldpZHRoLCBpbm5lckhlaWdodClcbiAgYmFsbC51cGRhdGUoKVxufVxuXG5pbml0KHRydWUpXG5hbmltYXRlKClcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Zyb250L2RldmljZS5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///67\n");

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"27f6140e1576b2445ee5cd41189bd6de.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvaW1nL2JhbGwucG5nP2ZlMTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyN2Y2MTQwZTE1NzZiMjQ0NWVlNWNkNDExODliZDZkZS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mcm9udC9pbWcvYmFsbC5wbmdcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///68\n");

/***/ })

/******/ });