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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener(\"load\", load);\n/** ロード時処理 */\n\nfunction load() {\n  /** 表示時の時間 */\n  var start = new Date(); // console.log(`start: ${start}`);\n\n  window.timerid = setInterval(goTimer, 10, start);\n}\n/** 分HTML */\n\n\nvar minHtml = document.querySelector('.js-min');\n/** 秒HTML */\n\nvar secHtml = document.querySelector('.js-sec');\n/** ミリ秒HTML */\n\nvar pointHtml = document.querySelector('.js-point');\n/**\r\n * タイマーを動かす\r\n * @param {Object} start 開始時\r\n */\n\nvar goTimer = function goTimer(start) {\n  /** 現在の時 */\n  var now = new Date();\n  /** 経過した時 */\n\n  var time = now.getTime() - start.getTime();\n  /** 経過したミリ秒 */\n\n  var point = Math.floor(time / 10);\n  /** 経過した秒 */\n\n  var sec = Math.floor(time / 1000);\n  /** 経過した分 */\n\n  var min = Math.floor(sec / 60);\n  /** 経過した時間 */\n\n  var hour = Math.floor(min / 60);\n  /** 残り分数 */\n\n  var remainingMin = addZero(2 - (min - hour * 60));\n  /** 残り秒数 */\n\n  var remainingSec = addZero(59 - (sec - min * 60));\n  /** 残りミリ秒数 */\n\n  var remainingPoint = addZero(99 - (point - sec * 100)); //残り分数を表示\n\n  minHtml.innerHTML = remainingMin; //残り秒数を表示\n\n  secHtml.innerHTML = remainingSec; //残りミリ秒数を表示\n\n  pointHtml.innerHTML = remainingPoint; //2分で終わる\n\n  if (point >= 17999) clearInterval(window.timerid);\n};\n/**\r\n * 10未満なら10の位を0埋め\r\n * @param {number} value 数値\r\n * @return {string} 0埋めされた数値\r\n */\n\n\nvar addZero = function addZero(value) {\n  return value < 10 ? \"0\".concat(value) : String(value);\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });