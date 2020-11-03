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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\n\nconst canvas = document.getElementById('game');\nconst ctx = canvas.getContext(\"2d\");\n\n// ctx.beginPath();\n// ctx.arc(100, 75, 50, 0, 2 * Math.PI);\n// ctx.stroke();\n\nconst player = new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](200,200)\nconst playerPict = new Image();\nplayerPict.src = \"./src/images/player1.png\";\nconst background = new Image();\nbackground.src = \"./src/images/background.jpg\"\n\n// ctx.onload = function() {\n//     ctx.drawImage(playerPict,100,10,player.width,player.height);\n// }\nfunction drawPlayer(img,sX, sY, sW, sH, dX, dY, dW, dH) {\n    ctx.drawImage(img,sX, sY, sW, sH, dX, dY, dW, dH);\n}\n\n\n// function animate() {\n//     ctx.clearRect(0,0, canvas.clientWidth, canvas.height);\n//     ctx.drawImage(background,0,0,800,600);\n//     drawPlayer(playerPict,player.width * player.frameX, player.height*player.frameY,player.width, player.height, player.x,player.y,player.width, player.height);\n//     player.movePlayer();\n//     player.handlePlayerFrame();\n//     requestAnimationFrame(animate);\n// }\n\n// animate();\n\n// setInterval(function(){\n//     ctx.clearRect(0,0, canvas.clientWidth, canvas.height);\n//     ctx.drawImage(background,0,0,800,600);\n//     drawPlayer(playerPict,player.width * player.frameX, player.height*player.frameY,player.width, player.height, player.x,player.y,player.width, player.height);\n//     player.movePlayer();\n//     player.handlePlayerFrame();\n//     requestAnimationFrame(animate);\n// },50);\n\nwindow.addEventListener(\"keydown\", function (e) {\n    if(e.keyCode === 65 || e.keyCode === 68 || e.keyCode === 83 || e.keyCode === 87){\n        player.keys[e.keyCode] = true;\n        player.moving = true;\n    }\n    // console.log(player.keys)\n})\n\nwindow.addEventListener(\"keyup\", function (e) {\n    if(e.keyCode === 65 || e.keyCode === 68 || e.keyCode === 83 || e.keyCode === 87){\n        delete player.keys[e.keyCode];\n        player.moving = false;\n    }\n})\n\nlet fps, fpsInterval, startTime, now, then, elapsed;\n\nfunction startAnimating(fps){\n    fpsInterval = 1000/fps;\n    then = Date.now();\n    startTime = then;\n    animate()\n}\n\nfunction animate(){\n    requestAnimationFrame(animate);\n    now = Date.now();\n    elapsed = now - then;\n    if(elapsed > fpsInterval){\n        then = now - (elapsed % fpsInterval);\n        ctx.clearRect(0,0, canvas.clientWidth, canvas.height);\n        ctx.drawImage(background,0,0,800,600);\n        drawPlayer(playerPict,player.width * player.frameX, player.height*player.frameY,player.width, player.height, player.x,player.y,player.width, player.height);\n        player.movePlayer();\n        player.handlePlayerFrame();\n    }\n    \n}\nstartAnimating(30)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\nclass Player {\n    constructor(x,y){\n        this.x = x;\n        this.y = y;\n        this.width = 32;\n        this.height = 52;\n        this.frameX = 0;\n        this.frameY = 0;\n        this.speed = 7;\n        this.moving = false;\n        this.keys = []\n    }\n\n    movePlayer(){\n        if (this.keys[87] && this.y>100){\n            this.y -= this.speed;\n            this.frameY = 3;\n            this.moving = true;\n        }\n        if (this.keys[83] && this.y<500){\n            this.y += this.speed;\n            this.frameY = 0;\n            this.moving = true;\n        }\n        if (this.keys[65] && this.x>100){\n            this.x -= this.speed;\n            this.frameY = 1;\n            this.moving = true;\n        }\n        if (this.keys[68]&& this.x<650){\n            this.x += this.speed;\n            this.frameY = 2;\n            this.moving = true;\n        }\n    }\n\n    handlePlayerFrame(){\n        if (this.frameX < 3 && this.moving){\n            this.frameX++;\n        }else{\n            this.frameX = 0;\n        }\n    }\n\n}\n\n\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });