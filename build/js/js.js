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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('load', function () {\n  var mobileBtn = document.querySelector('.mobile-menu');\n  var navigation = document.querySelector('.navigation__ul');\n  mobileBtn.addEventListener('click', function () {\n    navigation.classList.toggle('isOpened');\n    mobileBtn.classList.toggle('closer');\n  });\n  navigation.addEventListener('click', function () {\n    navigation.classList.remove('isOpened');\n    mobileBtn.classList.remove('closer');\n  });\n  var firstTab = document.querySelector('.catalog__tab > li:first-child');\n  var secondTab = document.querySelector('.catalog__tab > li:nth-child(2)');\n  var thirdTab = document.querySelector('.catalog__tab > li:last-child');\n  var firstContent = document.querySelector('.catalog__content > li:first-child');\n  var secondContent = document.querySelector('.catalog__content > li:nth-child(2)');\n  var thirdContent = document.querySelector('.catalog__content > li:last-child');\n  firstTab.addEventListener('click', function () {\n    firstTab.classList.add('active');\n    secondTab.classList.remove('active');\n    thirdTab.classList.remove('active');\n    firstContent.classList.remove('d-n');\n    secondContent.classList.add('d-n');\n    thirdContent.classList.add('d-n');\n  });\n  secondTab.addEventListener('click', function () {\n    firstTab.classList.remove('active');\n    secondTab.classList.add('active');\n    thirdTab.classList.remove('active');\n    firstContent.classList.add('d-n');\n    secondContent.classList.remove('d-n');\n    thirdContent.classList.add('d-n');\n  });\n  thirdTab.addEventListener('click', function () {\n    firstTab.classList.remove('active');\n    secondTab.classList.remove('active');\n    thirdTab.classList.add('active');\n    firstContent.classList.add('d-n');\n    secondContent.classList.add('d-n');\n    thirdContent.classList.remove('d-n');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xyXG5cclxuXHR2YXIgbW9iaWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1tZW51Jyk7XHJcblx0dmFyIG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9fdWwnKTtcclxuXHRtb2JpbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0bmF2aWdhdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdpc09wZW5lZCcpO1xyXG5cdFx0bW9iaWxlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2Nsb3NlcicpO1xyXG5cdH0pO1xyXG5cdG5hdmlnYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0bmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpc09wZW5lZCcpO1xyXG5cdFx0bW9iaWxlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlcicpO1xyXG5cdH0pO1xyXG5cclxuXHR2YXIgZmlyc3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZ19fdGFiID4gbGk6Zmlyc3QtY2hpbGQnKTtcclxuXHR2YXIgc2Vjb25kVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGFsb2dfX3RhYiA+IGxpOm50aC1jaGlsZCgyKScpO1xyXG5cdHZhciB0aGlyZFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nX190YWIgPiBsaTpsYXN0LWNoaWxkJyk7XHJcblx0dmFyIGZpcnN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nX19jb250ZW50ID4gbGk6Zmlyc3QtY2hpbGQnKTtcclxuXHR2YXIgc2Vjb25kQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nX19jb250ZW50ID4gbGk6bnRoLWNoaWxkKDIpJyk7XHJcblx0dmFyIHRoaXJkQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nX19jb250ZW50ID4gbGk6bGFzdC1jaGlsZCcpO1xyXG5cclxuXHRmaXJzdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHRmaXJzdFRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdHNlY29uZFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdHRoaXJkVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0Zmlyc3RDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2QtbicpO1xyXG5cdFx0c2Vjb25kQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkLW4nKTtcclxuXHRcdHRoaXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkLW4nKTtcclxuXHR9KTtcclxuXHJcblx0c2Vjb25kVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdGZpcnN0VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0c2Vjb25kVGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0dGhpcmRUYWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRmaXJzdENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZC1uJyk7XHJcblx0XHRzZWNvbmRDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2QtbicpO1xyXG5cdFx0dGhpcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2QtbicpO1xyXG5cdH0pO1xyXG5cclxuXHR0aGlyZFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHRmaXJzdFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdHNlY29uZFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdHRoaXJkVGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0Zmlyc3RDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2QtbicpO1xyXG5cdFx0c2Vjb25kQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkLW4nKTtcclxuXHRcdHRoaXJkQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW4nKTtcclxuXHR9KTtcclxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });