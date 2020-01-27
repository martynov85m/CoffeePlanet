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

eval("$(function () {\n  var mobileBtn = document.querySelector('.mobile-menu');\n  var navigation = document.querySelector('.navigation__ul');\n  mobileBtn.addEventListener('click', function () {\n    navigation.classList.toggle('isOpened');\n    mobileBtn.classList.toggle('closer');\n  });\n  navigation.addEventListener('click', function () {\n    navigation.classList.remove('isOpened');\n    mobileBtn.classList.remove('closer');\n  });\n  var linkTab = $('.open_tab');\n  var menuTab = $('.catalog__content_li');\n  linkTab.on('click', function (clickTab) {\n    clickTab.preventDefault();\n    var target = $(clickTab.target);\n    target.addClass('active');\n    var link = target.attr('href');\n    var activeTab = $(link);\n    menuTab.addClass('d-n');\n    activeTab.removeClass('d-n');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG5cclxuXHR2YXIgbW9iaWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1tZW51Jyk7XHJcblx0dmFyIG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9fdWwnKTtcclxuXHRtb2JpbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0bmF2aWdhdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdpc09wZW5lZCcpO1xyXG5cdFx0bW9iaWxlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2Nsb3NlcicpO1xyXG5cdH0pO1xyXG5cdG5hdmlnYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0bmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpc09wZW5lZCcpO1xyXG5cdFx0bW9iaWxlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlcicpO1xyXG5cdH0pO1xyXG5cclxuXHR2YXIgbGlua1RhYiA9ICQoJy5vcGVuX3RhYicpO1xyXG5cdHZhciBtZW51VGFiID0gJCgnLmNhdGFsb2dfX2NvbnRlbnRfbGknKTtcclxuXHJcblx0bGlua1RhYi5vbignY2xpY2snLCBmdW5jdGlvbihjbGlja1RhYil7XHJcblx0XHRjbGlja1RhYi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dmFyIHRhcmdldCA9ICQoY2xpY2tUYWIudGFyZ2V0KTtcclxuXHRcdHRhcmdldC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG5cclxuXHRcdHZhciBsaW5rID0gdGFyZ2V0LmF0dHIoJ2hyZWYnKTtcclxuXHRcdHZhciBhY3RpdmVUYWIgPSAkKGxpbmspO1xyXG5cdFx0bWVudVRhYi5hZGRDbGFzcygnZC1uJyk7XHJcblx0XHRhY3RpdmVUYWIucmVtb3ZlQ2xhc3MoJ2QtbicpO1xyXG5cdH0pO1xyXG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });