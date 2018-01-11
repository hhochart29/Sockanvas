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
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ({

/***/ 53:
/***/ (function(module, exports) {

eval("window.socket.on('shotData', (client, data) => {\n  const popup = document.querySelector('.popup')\n  if(popup.innerHTML !== '')\n    popup.innerHTML = ''\n  console.log(window.socket)\n  popup.innerHTML = 'Le joueur ' + client.name + ' vient d\\'effectuer un tir avec l\\'angle ' + data.touchAngle + ' et d\\'une puissance de ' + data.touchSpeed\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvZGVza3RvcC5qcz80ZjQ2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiNTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuc29ja2V0Lm9uKCdzaG90RGF0YScsIChjbGllbnQsIGRhdGEpID0+IHtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKVxuICBpZihwb3B1cC5pbm5lckhUTUwgIT09ICcnKVxuICAgIHBvcHVwLmlubmVySFRNTCA9ICcnXG4gIGNvbnNvbGUubG9nKHdpbmRvdy5zb2NrZXQpXG4gIHBvcHVwLmlubmVySFRNTCA9ICdMZSBqb3VldXIgJyArIGNsaWVudC5uYW1lICsgJyB2aWVudCBkXFwnZWZmZWN0dWVyIHVuIHRpciBhdmVjIGxcXCdhbmdsZSAnICsgZGF0YS50b3VjaEFuZ2xlICsgJyBldCBkXFwndW5lIHB1aXNzYW5jZSBkZSAnICsgZGF0YS50b3VjaFNwZWVkXG59KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Zyb250L2Rlc2t0b3AuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///53\n");

/***/ })

/******/ });