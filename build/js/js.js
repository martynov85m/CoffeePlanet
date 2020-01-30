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

eval("$(function () {\n  var mobileBtn = document.querySelector('.mobile-menu');\n  var navigation = document.querySelector('.navigation__ul');\n  mobileBtn.addEventListener('click', function () {\n    navigation.classList.toggle('isOpened');\n    mobileBtn.classList.toggle('closer');\n  });\n  navigation.addEventListener('click', function () {\n    navigation.classList.remove('isOpened');\n    mobileBtn.classList.remove('closer');\n  });\n  /* Modals */\n\n  var btnModals = $('.btn_modal');\n  btnModals.on('click', function (event) {\n    event.preventDefault();\n    var target = $(event.target);\n    var link = target.attr('href');\n    var modal = $(link);\n    modal.addClass('active');\n    var container = modal.parents('.modal-container');\n    container.removeClass('d-n');\n  });\n  var closer = $('.closer');\n  closer.on('click', function (event) {\n    var target = $(event.target);\n    var container = target.parents('.modal-container');\n    container.addClass('d-n');\n    var active = $('.modal-container .active');\n    active.removeClass('active');\n  });\n  /* Tabs */\n\n  var linkTab = $('.catalog__tab_a');\n  var menuTab = $('.catalog__content_li');\n  linkTab.on('click', function (event) {\n    event.preventDefault();\n    var target = $(event.target);\n    target.addClass('active');\n    var link = target.attr('href');\n    var activeTab = $(link);\n    menuTab.addClass('d-n');\n    activeTab.removeClass('d-n');\n  });\n  /* Slider */\n\n  $('.slider').slick({\n    autoplay: true,\n    autoplaySpeed: 2000,\n    cssEase: 'ease-in-out',\n    pauseOnHover: false,\n    prevArrow: $('.slider-container__btn_prev'),\n    nextArrow: $('.slider-container__btn_next')\n  });\n  /* Ease scroll */\n\n  var navLinks = $('.navigation__link');\n  navLinks.on('click', function (event) {\n    event.preventDefault();\n    var target = $(event.target);\n    var href = target.attr('href');\n    var elemToScroll = $(href);\n    $('html, body').animate({\n      scrollTop: elemToScroll.offset().top - 50\n    }, 900);\n  });\n  /* Fix head */\n\n  $(window).on('scroll', function (event) {\n    var target = $(event.target);\n    var scrolledPixels = target.scrollTop();\n    var header = $('.header');\n\n    if (scrolledPixels > 400) {\n      header.addClass('scrolled');\n    } else {\n      header.removeClass('scrolled');\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG5cclxuXHR2YXIgbW9iaWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1tZW51Jyk7XHJcblx0dmFyIG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9fdWwnKTtcclxuXHRtb2JpbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0bmF2aWdhdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdpc09wZW5lZCcpO1xyXG5cdFx0bW9iaWxlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2Nsb3NlcicpO1xyXG5cdH0pO1xyXG5cdG5hdmlnYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0bmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpc09wZW5lZCcpO1xyXG5cdFx0bW9iaWxlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlcicpO1xyXG5cdH0pO1xyXG5cclxuXHQvKiBNb2RhbHMgKi9cclxuXHR2YXIgYnRuTW9kYWxzID0gJCgnLmJ0bl9tb2RhbCcpO1xyXG5cclxuXHRidG5Nb2RhbHMub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHZhciB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XHJcblx0XHR2YXIgbGluayA9IHRhcmdldC5hdHRyKCdocmVmJyk7XHJcblxyXG5cdFx0dmFyIG1vZGFsID0gJChsaW5rKTtcclxuXHRcdG1vZGFsLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcblx0XHR2YXIgY29udGFpbmVyID0gbW9kYWwucGFyZW50cygnLm1vZGFsLWNvbnRhaW5lcicpO1xyXG5cdFx0Y29udGFpbmVyLnJlbW92ZUNsYXNzKCdkLW4nKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHZhciBjbG9zZXIgPSAkKCcuY2xvc2VyJyk7XHJcblxyXG5cdGNsb3Nlci5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XHJcblx0XHR2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xyXG5cdFx0dmFyIGNvbnRhaW5lciA9IHRhcmdldC5wYXJlbnRzKCcubW9kYWwtY29udGFpbmVyJyk7XHJcblx0XHRjb250YWluZXIuYWRkQ2xhc3MoJ2QtbicpO1xyXG5cdFx0dmFyIGFjdGl2ZSA9ICQoJy5tb2RhbC1jb250YWluZXIgLmFjdGl2ZScpO1xyXG5cdFx0YWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblxyXG5cdC8qIFRhYnMgKi9cclxuXHR2YXIgbGlua1RhYiA9ICQoJy5jYXRhbG9nX190YWJfYScpO1xyXG5cdHZhciBtZW51VGFiID0gJCgnLmNhdGFsb2dfX2NvbnRlbnRfbGknKTtcclxuXHJcblx0bGlua1RhYi5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dmFyIHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcclxuXHRcdHRhcmdldC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG5cdFx0dmFyIGxpbmsgPSB0YXJnZXQuYXR0cignaHJlZicpO1xyXG5cdFx0dmFyIGFjdGl2ZVRhYiA9ICQobGluayk7XHJcblx0XHRtZW51VGFiLmFkZENsYXNzKCdkLW4nKTtcclxuXHRcdGFjdGl2ZVRhYi5yZW1vdmVDbGFzcygnZC1uJyk7XHJcblx0fSk7XHJcblxyXG5cdC8qIFNsaWRlciAqL1xyXG5cdCQoJy5zbGlkZXInKS5zbGljayh7XHJcblx0XHRhdXRvcGxheTogdHJ1ZSxcclxuXHRcdGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcblx0XHRjc3NFYXNlOiAnZWFzZS1pbi1vdXQnLFxyXG5cdFx0cGF1c2VPbkhvdmVyOiBmYWxzZSxcclxuXHRcdHByZXZBcnJvdzogJCgnLnNsaWRlci1jb250YWluZXJfX2J0bl9wcmV2JyksXHJcblx0XHRuZXh0QXJyb3c6ICQoJy5zbGlkZXItY29udGFpbmVyX19idG5fbmV4dCcpXHJcblxyXG5cdH0pO1xyXG5cdC8qIEVhc2Ugc2Nyb2xsICovXHJcblx0dmFyIG5hdkxpbmtzID0gJCgnLm5hdmlnYXRpb25fX2xpbmsnKTtcclxuXHJcblx0bmF2TGlua3Mub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHZhciB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XHJcblx0XHR2YXIgaHJlZiA9IHRhcmdldC5hdHRyKCdocmVmJyk7XHJcblx0XHR2YXIgZWxlbVRvU2Nyb2xsID0gJChocmVmKTtcclxuXHJcblx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdHNjcm9sbFRvcDogZWxlbVRvU2Nyb2xsLm9mZnNldCgpLnRvcCAtIDUwXHJcblx0XHR9LCA5MDApO1xyXG5cdH0pO1xyXG5cdC8qIEZpeCBoZWFkICovXHJcblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbihldmVudCl7XHJcblx0XHR2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xyXG5cdFx0dmFyIHNjcm9sbGVkUGl4ZWxzID0gdGFyZ2V0LnNjcm9sbFRvcCgpO1xyXG5cdFx0dmFyIGhlYWRlciA9ICQoJy5oZWFkZXInKTtcclxuXHRcdGlmKHNjcm9sbGVkUGl4ZWxzID4gNDAwKXtcclxuXHRcdFx0aGVhZGVyLmFkZENsYXNzKCdzY3JvbGxlZCcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZGVyLnJlbW92ZUNsYXNzKCdzY3JvbGxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cclxuXHJcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });