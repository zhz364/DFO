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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monster */ \"./src/monster.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _shoot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shoot */ \"./src/shoot.js\");\n\n\n\n\nconst canvas = document.getElementById('game');\nconst ctx = canvas.getContext(\"2d\");\n\nconst scoreBox = document.getElementById(\"score\");\nconst tryAgainBtn = document.getElementById(\"try_again_btn\");\nconst gameOverModal = document.getElementById(\"gameOverModal\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (ctx);\n// ctx.beginPath();\n// ctx.arc(100, 75, 50, 0, 2 * Math.PI);\n// ctx.stroke();\n\nconst player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](200,200)\nconst playerPict = new Image();\nplayerPict.src = \"./src/images/player1.png\";\nconst background = new Image();\nbackground.src = \"./src/images/background.jpg\"\n\n// ctx.onload = function() {\n//     ctx.drawImage(playerPict,100,10,player.width,player.height);\n// }\nfunction drawPlayer(img,sX, sY, sW, sH, dX, dY, dW, dH) {\n    ctx.drawImage(img,sX, sY, sW, sH, dX, dY, dW, dH);\n}\n\n\nwindow.addEventListener(\"keydown\", function (e) {\n    if(e.keyCode === 65 || e.keyCode === 68 || e.keyCode === 83 || e.keyCode === 87){\n        player.keys[e.keyCode] = true;\n        player.moving = true;\n    }\n    // console.log(player.keys)\n})\n\nwindow.addEventListener(\"keyup\", function (e) {\n    if(e.keyCode === 65 || e.keyCode === 68 || e.keyCode === 83 || e.keyCode === 87){\n        delete player.keys[e.keyCode];\n        player.moving = false;\n    }\n})\n\nconst shoots = []\nconst monsters = []\n\nfunction getMousePos(canvas, e) {\n    var rect = canvas.getBoundingClientRect();\n    let scaleX = canvas.width / rect.width;   \n    let scaleY = canvas.height / rect.height;\n    return {\n      x: (e.clientX - rect.left) * scaleX,\n      y: (e.clientY - rect.top) * scaleY\n    };\n}\nwindow.addEventListener('click', function(e){\n    const pos = getMousePos(canvas, e)\n    const angle = Math.atan2(pos.y - player.y, pos.x - player.x)\n    // console.log(angle)\n    const velocity = {\n        x: Math.cos(angle) * 3,\n        y: Math.sin(angle) * 3\n    }\n    shoots.push(new _shoot__WEBPACK_IMPORTED_MODULE_2__[\"default\"](player.x +10,player.y+20, velocity))\n});\n\nlet fpsInterval, startTime, now, then, elapsed;\n\n\nfunction startAnimating(fps){\n    fpsInterval = 1000/fps;\n    then = Date.now();\n    startTime = then;\n    animate()\n}\n\nlet animationId;\nlet score = 0;\nscoreBox.innerHTML = score;\nfunction animate(){\n    animationId = requestAnimationFrame(animate);\n    // ctx.clearRect(0,0, canvas.clientWidth, canvas.height);\n    now = Date.now();\n    elapsed = now - then;\n    if(elapsed > fpsInterval){\n        then = now - (elapsed % fpsInterval);\n        ctx.clearRect(0,0, canvas.clientWidth, canvas.height);\n        ctx.drawImage(background,0,0,800,600);\n        drawPlayer(playerPict,player.width * player.frameX, player.height*player.frameY,player.width, player.height, player.x,player.y,player.width, player.height);\n        player.movePlayer();\n        player.handlePlayerFrame();\n    }\n\n    shoots.forEach((shoot)=>{\n        shoot.update(ctx)\n    })\n    monsters.forEach((monster,idx1)=>{\n        // monster.update(ctx);\n        monster.updateMosterLocation(player,ctx)\n        const monsterToPlayer = Math.hypot(player.x - monster.x, player.y - monster.y);\n        //end game\n        if(monsterToPlayer - monster.radius - player.size< 1){\n            cancelAnimationFrame(animationId)\n       }\n        shoots.forEach((shoot,idx2)=>{\n           const dist =  Math.hypot(shoot.x - monster.x,shoot.y - monster.y)\n           if(dist - monster.radius - shoot.radius< 1){\n                setTimeout(()=>{\n                    monsters.splice(idx1,1);\n                    shoots.splice(idx2,1);\n                },0)\n                score +=100;\n                scoreBox.innerHTML = score; \n           }\n           if(shoot.x < 100 || shoot.y < 150 || shoot.x > 700 || shoot.y > 500){\n                setTimeout(()=>{\n                    shoots.splice(idx2,1);\n                },0)\n           }\n        })\n    })\n}\nfunction spawnMonsters(){\n    setInterval(()=>{\n        let x;\n        let y;\n        if (Math.random() < 0.5){\n            x = Math.random() < 0.5 ? 150 : canvas.width - 150;\n            y = Math.random() < 0.5 ? 100 : canvas.height - 150;\n        }else{\n            x = Math.random() < 0.5 ? 150 : canvas.width - 150;\n            y = Math.random() < 0.5 ? 150 : canvas.height - 100;\n        }\n        const angle = Math.atan2(player.y - y, player.x - x)\n        const velocity = {\n        x: Math.cos(angle),\n        y: Math.sin(angle)\n    }\n        monsters.push(new _monster__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x,y,velocity))\n    },3000)\n}\n\ntryAgainBtn.addEventListener(\"click\",()=>{\n    startAnimating(30);\n    spawnMonsters();\n    gameOverModal.style.display = \"none\"\n})\nstartAnimating(30)\nspawnMonsters()\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/monster.js":
/*!************************!*\
  !*** ./src/monster.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Monster; });\nclass Monster{\n    constructor(x,y,velocity){\n        this.x = x;\n        this.y = y;\n        this.radius = 15;\n        this.color = \"blue\";\n        this.velocity = velocity\n        this.width = 33;\n        this.height = 32;\n        this.frameX = 0;\n        this.frameY = 0;\n        this.speed = 1;\n        \n        this.draw = this.draw.bind(this);\n        this.update = this.update.bind(this);\n        this.updateMosterLocation = this.updateMosterLocation.bind(this);\n        this.handleMonsterFrame = this.handleMonsterFrame.bind(this);\n    }\n    draw(ctx){\n        // ctx.beginPath()\n        // ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)\n        // ctx.fillStyle = this.color;\n        // ctx.fill();\n        const monster = new Image();\n        monster.src = \"./src/images/monster1.png\";\n        ctx.drawImage(monster,this.width * this.frameX, this.height* this.frameY, this.width, this.height, this.x,this.y,this.width, this.height);\n    }\n\n    update(ctx){\n        this.draw(ctx)\n        this.x = this.x + this.velocity.x\n        this.y = this.y + this.velocity.y\n    }\n\n    updateMosterLocation(player,ctx){\n        const angle = Math.atan2(player.y - this.y, player.x - this.x)\n        const velocities = {\n            x: Math.cos(angle),\n            y: Math.sin(angle)\n        }\n        this.velocity = velocities;\n        this.frameX = player.frameX;\n        if(player.frameY === 0){\n            if(player.y < this.y){\n                this.frameY = 3;\n            }else{\n                this.frameY = 0;\n            }\n        }else if(player.frameY === 1){\n            if(player.x < this.x){\n                this.frameY = 1;\n            }else{\n                this.frameY = 2;\n            }\n        }else if(player.frameY === 2){\n            if(player.x < this.x){\n                this.frameY = 1;\n            }else{\n                this.frameY = 2;\n            }\n        }else if(player.frameY === 3){\n            if(player.y < this.y){\n                this.frameY = 3;\n            }else{\n                this.frameY = 0;\n            }\n        }\n        // this.frameY = player.frameY;\n        this.handleMonsterFrame();\n        this.update(ctx);\n    }\n    handleMonsterFrame(){\n        if (this.frameX < 3){\n            this.frameX++;\n        }else{\n            this.frameX = 0;\n        }\n    }\n\n}\n\n//# sourceURL=webpack:///./src/monster.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\nclass Player {\n    constructor(x,y){\n        this.x = x;\n        this.y = y;\n        this.width = 32;\n        this.height = 52;\n        this.frameX = 0;\n        this.frameY = 0;\n        this.speed = 7;\n        this.moving = false;\n        this.keys = [];\n        this.size = 9;\n    }\n\n    movePlayer(){\n        if (this.keys[87] && this.y>100){\n            this.y -= this.speed;\n            this.frameY = 3;\n            this.moving = true;\n            \n        }\n        if (this.keys[83] && this.y<500){\n            this.y += this.speed;\n            this.frameY = 0;\n            this.moving = true;\n        }\n        if (this.keys[65] && this.x>100){\n            this.x -= this.speed;\n            this.frameY = 1;\n            this.moving = true;\n            // console.log(this.frameY)\n        }\n        if (this.keys[68]&& this.x<650){\n            this.x += this.speed;\n            this.frameY = 2;\n            this.moving = true;\n        }\n    }\n\n    handlePlayerFrame(){\n        if (this.frameX < 3 && this.moving){\n            this.frameX++;\n        }else{\n            this.frameX = 0;\n        }\n    }\n\n}\n\n\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/shoot.js":
/*!**********************!*\
  !*** ./src/shoot.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Shoot; });\n// import {ctx} from \"./index.js\"\nclass Shoot{\n    constructor(x,y,velocity){\n        this.x = x;\n        this.y = y;\n        this.radius = 10;\n        this.color = \"red\";\n        this.velocity = velocity\n        this.width = 20;\n        this.height = 20;\n        this.draw = this.draw.bind(this)\n    }\n    draw(ctx){\n        const fireball = new Image();\n        fireball.src = \"./src/images/fireball1.png\";\n        ctx.drawImage(fireball,this.x,this.y,this.width,this.height);\n    }\n\n    update(ctx){\n        this.draw(ctx)\n        this.x = this.x + this.velocity.x\n        this.y = this.y + this.velocity.y\n\n    }\n}\n\n// window.addEventListener('click', function(e){\n//     const shoot = new Shoot(event.clientX,event.clientY)\n//     shoot.draw()\n// });\n\n//# sourceURL=webpack:///./src/shoot.js?");

/***/ })

/******/ });