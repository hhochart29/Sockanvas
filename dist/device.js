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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ({

/***/ 48:
/***/ (function(module, exports) {

eval("let deltaY\nlet startX\nlet startY\nlet x\nlet y\nlet deltaX\nlet startTime\nlet endTime\nlet deltaTime\nlet speed\nlet angle\n\nlet data = {}\n\n//On appel chaque évènement liés au touché de l'écran\nwindow.addEventListener('touchstart', handleStart, false)\nwindow.addEventListener('touchend', handleEnd, false)\nwindow.addEventListener('touchmove', handleMove, false)\n\n//Fonction appelée lors du touché de l'écran\nfunction handleStart (event) {\n  startTime = new Date().getTime()\n  startY = event.touches[0].pageY\n  startX = event.touches[0].pageX\n}\n\n//Fonction appelée lors de la fin du touché de l'écran\nfunction handleEnd (event) {\n  endTime = new Date().getTime()\n  deltaTime = endTime - startTime\n  speed = deltaY / deltaTime\n  speed = Math.floor(speed * 10)\n  data.touchSpeed = speed\n\n  // On emet les donnees vers le server\n  window.socket.emit('clientAction', data)\n  console.log(data)\n\n  document.getElementById('touchSpeed').innerHTML = 'Speed : ' + data.touchSpeed\n}\n\n//Fonction appelé lors d'un mouvement sur l'écran\nfunction handleMove (event) {\n  x = event.touches[0].pageX\n  y = event.touches[0].pageY\n  deltaX = startX - x\n  deltaY = startY - y\n  if (deltaY < 0) {\n    deltaY = -deltaY\n  }\n  angle = Math.sin(deltaX / deltaY) * 180 / Math.PI\n  angle = angle.toFixed(2)\n  data.touchAngle = angle\n  document.getElementById('touchAngle').innerHTML = 'Angle : ' + data.touchAngle\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvZGV2aWNlLmpzP2U0ODciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI0OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBkZWx0YVlcbmxldCBzdGFydFhcbmxldCBzdGFydFlcbmxldCB4XG5sZXQgeVxubGV0IGRlbHRhWFxubGV0IHN0YXJ0VGltZVxubGV0IGVuZFRpbWVcbmxldCBkZWx0YVRpbWVcbmxldCBzcGVlZFxubGV0IGFuZ2xlXG5cbmxldCBkYXRhID0ge31cblxuLy9PbiBhcHBlbCBjaGFxdWUgw6l2w6huZW1lbnQgbGnDqXMgYXUgdG91Y2jDqSBkZSBsJ8OpY3Jhblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVTdGFydCwgZmFsc2UpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVFbmQsIGZhbHNlKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZU1vdmUsIGZhbHNlKVxuXG4vL0ZvbmN0aW9uIGFwcGVsw6llIGxvcnMgZHUgdG91Y2jDqSBkZSBsJ8OpY3JhblxuZnVuY3Rpb24gaGFuZGxlU3RhcnQgKGV2ZW50KSB7XG4gIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gIHN0YXJ0WSA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVlcbiAgc3RhcnRYID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWFxufVxuXG4vL0ZvbmN0aW9uIGFwcGVsw6llIGxvcnMgZGUgbGEgZmluIGR1IHRvdWNow6kgZGUgbCfDqWNyYW5cbmZ1bmN0aW9uIGhhbmRsZUVuZCAoZXZlbnQpIHtcbiAgZW5kVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gIGRlbHRhVGltZSA9IGVuZFRpbWUgLSBzdGFydFRpbWVcbiAgc3BlZWQgPSBkZWx0YVkgLyBkZWx0YVRpbWVcbiAgc3BlZWQgPSBNYXRoLmZsb29yKHNwZWVkICogMTApXG4gIGRhdGEudG91Y2hTcGVlZCA9IHNwZWVkXG5cbiAgLy8gT24gZW1ldCBsZXMgZG9ubmVlcyB2ZXJzIGxlIHNlcnZlclxuICB3aW5kb3cuc29ja2V0LmVtaXQoJ2NsaWVudEFjdGlvbicsIGRhdGEpXG4gIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdWNoU3BlZWQnKS5pbm5lckhUTUwgPSAnU3BlZWQgOiAnICsgZGF0YS50b3VjaFNwZWVkXG59XG5cbi8vRm9uY3Rpb24gYXBwZWzDqSBsb3JzIGQndW4gbW91dmVtZW50IHN1ciBsJ8OpY3JhblxuZnVuY3Rpb24gaGFuZGxlTW92ZSAoZXZlbnQpIHtcbiAgeCA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVhcbiAgeSA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVlcbiAgZGVsdGFYID0gc3RhcnRYIC0geFxuICBkZWx0YVkgPSBzdGFydFkgLSB5XG4gIGlmIChkZWx0YVkgPCAwKSB7XG4gICAgZGVsdGFZID0gLWRlbHRhWVxuICB9XG4gIGFuZ2xlID0gTWF0aC5zaW4oZGVsdGFYIC8gZGVsdGFZKSAqIDE4MCAvIE1hdGguUElcbiAgYW5nbGUgPSBhbmdsZS50b0ZpeGVkKDIpXG4gIGRhdGEudG91Y2hBbmdsZSA9IGFuZ2xlXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3VjaEFuZ2xlJykuaW5uZXJIVE1MID0gJ0FuZ2xlIDogJyArIGRhdGEudG91Y2hBbmdsZVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZnJvbnQvZGV2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///48\n");

/***/ })

/******/ });