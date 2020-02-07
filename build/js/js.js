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

eval("$(function () {\n  var mobileBtn = document.querySelector('.mobile-menu');\n  var navigation = document.querySelector('.navigation__ul');\n  mobileBtn.addEventListener('click', function () {\n    navigation.classList.toggle('isOpened');\n    mobileBtn.classList.toggle('closer');\n  });\n  navigation.addEventListener('click', function () {\n    navigation.classList.remove('isOpened');\n    mobileBtn.classList.remove('closer');\n  });\n  /* Modals */\n\n  var btnModals = $('.btn_modal');\n  btnModals.on('click', function (event) {\n    event.preventDefault();\n    var target = $(event.target);\n    var link = target.attr('href');\n    var modal = $(link);\n    modal.addClass('active');\n    var container = modal.parents('.modal-container');\n    container.removeClass('d-n');\n  });\n  var closer = $('.closer');\n  closer.on('click', function (event) {\n    var target = $(event.target);\n    var container = target.parents('.modal-container');\n    container.addClass('d-n');\n    var active = $('.modal-container .active');\n    active.removeClass('active');\n  });\n  /* Tabs */\n\n  var linkTab = $('.catalog__tab_a');\n  var menuTab = $('.catalog__content_li');\n  linkTab.on('click', function (event) {\n    event.preventDefault();\n    var target = $(event.target);\n    target.addClass('active');\n    var link = target.attr('href');\n    var activeTab = $(link);\n    menuTab.addClass('d-n');\n    activeTab.removeClass('d-n');\n  });\n  /* Slider */\n\n  $('.slider').slick({\n    autoplay: true,\n    autoplaySpeed: 2000,\n    cssEase: 'ease-in-out',\n    pauseOnHover: false,\n    prevArrow: $('.slider-container__btn_prev'),\n    nextArrow: $('.slider-container__btn_next')\n  });\n  /* Ease scroll */\n\n  var navLinks = $('.navigation__link');\n  navLinks.on('click', function (event) {\n    event.preventDefault();\n    var target = $(event.target);\n    var href = target.attr('href');\n    var elemToScroll = $(href);\n    $('html, body').animate({\n      scrollTop: elemToScroll.offset().top - 50\n    }, 900);\n  });\n  /* Fix head */\n\n  $(window).on('scroll', function (event) {\n    var target = $(event.target);\n    var scrolledPixels = target.scrollTop();\n    var header = $('.header');\n\n    if (scrolledPixels > 400) {\n      header.addClass('scrolled');\n    } else {\n      header.removeClass('scrolled');\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG5cclxuXHR2YXIgbW9iaWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1tZW51Jyk7XHJcblx0dmFyIG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9fdWwnKTtcclxuXHRtb2JpbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0bmF2aWdhdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdpc09wZW5lZCcpO1xyXG5cdFx0bW9iaWxlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2Nsb3NlcicpO1xyXG5cdH0pO1xyXG5cdG5hdmlnYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0bmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpc09wZW5lZCcpO1xyXG5cdFx0bW9iaWxlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlcicpO1xyXG5cdH0pO1xyXG5cclxuXHQvKiBNb2RhbHMgKi9cclxuXHR2YXIgYnRuTW9kYWxzID0gJCgnLmJ0bl9tb2RhbCcpO1xyXG5cclxuXHRidG5Nb2RhbHMub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHZhciB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XHJcblx0XHR2YXIgbGluayA9IHRhcmdldC5hdHRyKCdocmVmJyk7XHJcblxyXG5cdFx0dmFyIG1vZGFsID0gJChsaW5rKTtcclxuXHRcdG1vZGFsLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcblx0XHR2YXIgY29udGFpbmVyID0gbW9kYWwucGFyZW50cygnLm1vZGFsLWNvbnRhaW5lcicpO1xyXG5cdFx0Y29udGFpbmVyLnJlbW92ZUNsYXNzKCdkLW4nKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHZhciBjbG9zZXIgPSAkKCcuY2xvc2VyJyk7XHJcblxyXG5cdGNsb3Nlci5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XHJcblx0XHR2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xyXG5cdFx0dmFyIGNvbnRhaW5lciA9IHRhcmdldC5wYXJlbnRzKCcubW9kYWwtY29udGFpbmVyJyk7XHJcblx0XHRjb250YWluZXIuYWRkQ2xhc3MoJ2QtbicpO1xyXG5cdFx0dmFyIGFjdGl2ZSA9ICQoJy5tb2RhbC1jb250YWluZXIgLmFjdGl2ZScpO1xyXG5cdFx0YWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblx0LyogVGFicyAqL1xyXG5cdHZhciBsaW5rVGFiID0gJCgnLmNhdGFsb2dfX3RhYl9hJyk7XHJcblx0dmFyIG1lbnVUYWIgPSAkKCcuY2F0YWxvZ19fY29udGVudF9saScpO1xyXG5cclxuXHRsaW5rVGFiLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xyXG5cdFx0dGFyZ2V0LmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcblx0XHR2YXIgbGluayA9IHRhcmdldC5hdHRyKCdocmVmJyk7XHJcblx0XHR2YXIgYWN0aXZlVGFiID0gJChsaW5rKTtcclxuXHRcdG1lbnVUYWIuYWRkQ2xhc3MoJ2QtbicpO1xyXG5cdFx0YWN0aXZlVGFiLnJlbW92ZUNsYXNzKCdkLW4nKTtcclxuXHR9KTtcclxuXHJcblx0LyogU2xpZGVyICovXHJcblx0JCgnLnNsaWRlcicpLnNsaWNrKHtcclxuXHRcdGF1dG9wbGF5OiB0cnVlLFxyXG5cdFx0YXV0b3BsYXlTcGVlZDogMjAwMCxcclxuXHRcdGNzc0Vhc2U6ICdlYXNlLWluLW91dCcsXHJcblx0XHRwYXVzZU9uSG92ZXI6IGZhbHNlLFxyXG5cdFx0cHJldkFycm93OiAkKCcuc2xpZGVyLWNvbnRhaW5lcl9fYnRuX3ByZXYnKSxcclxuXHRcdG5leHRBcnJvdzogJCgnLnNsaWRlci1jb250YWluZXJfX2J0bl9uZXh0JylcclxuXHJcblx0fSk7XHJcblx0LyogRWFzZSBzY3JvbGwgKi9cclxuXHR2YXIgbmF2TGlua3MgPSAkKCcubmF2aWdhdGlvbl9fbGluaycpO1xyXG5cclxuXHRuYXZMaW5rcy5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dmFyIHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcclxuXHRcdHZhciBocmVmID0gdGFyZ2V0LmF0dHIoJ2hyZWYnKTtcclxuXHRcdHZhciBlbGVtVG9TY3JvbGwgPSAkKGhyZWYpO1xyXG5cclxuXHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0c2Nyb2xsVG9wOiBlbGVtVG9TY3JvbGwub2Zmc2V0KCkudG9wIC0gNTBcclxuXHRcdH0sIDkwMCk7XHJcblx0fSk7XHJcblx0LyogRml4IGhlYWQgKi9cclxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuXHRcdHZhciB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XHJcblx0XHR2YXIgc2Nyb2xsZWRQaXhlbHMgPSB0YXJnZXQuc2Nyb2xsVG9wKCk7XHJcblx0XHR2YXIgaGVhZGVyID0gJCgnLmhlYWRlcicpO1xyXG5cdFx0aWYoc2Nyb2xsZWRQaXhlbHMgPiA0MDApe1xyXG5cdFx0XHRoZWFkZXIuYWRkQ2xhc3MoJ3Njcm9sbGVkJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkZXIucmVtb3ZlQ2xhc3MoJ3Njcm9sbGVkJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });