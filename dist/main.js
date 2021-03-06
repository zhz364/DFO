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

/***/ "./src/ghost.js":
/*!**********************!*\
  !*** ./src/ghost.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ghost; });\n/* harmony import */ var _shoot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shoot */ \"./src/shoot.js\");\n\nclass Ghost{\n    constructor(x,y,velocity,player){\n        this.x = x;\n        this.y = y;\n        this.radius = 20;\n        this.velocity = velocity\n        this.width = 35;\n        this.height = 45;\n        this.frameX = 0;\n        this.frameY = 0;\n        this.speed = 1;\n        this.ghostShoots=[];\n        this.player = player\n        \n        this.draw = this.draw.bind(this);\n        this.updateMonsterLocation = this.updateMonsterLocation.bind(this);\n        this.handleMonsterFrame = this.handleMonsterFrame.bind(this);   \n        this.shoot = this.shoot.bind(this);\n        this.shootCheck = this.shootCheck.bind(this);\n        this.ghostBulet = this.ghostBulet.bind(this)\n        this.intervalId = setInterval(() => {\n            this.ghostBulet()\n        }, 5000);\n    }\n    \n    draw(ctx){\n        const monster = new Image();\n        monster.src = \"./src/images/monster2.png\";\n        ctx.drawImage(monster,this.width * this.frameX, this.height* this.frameY, this.width, this.height, this.x,this.y,this.width, this.height);\n    }\n\n    ghostBulet(){\n        const angle = Math.atan2(this.player.y - this.y, this.player.x - this.x)\n        const velocity = {\n            x: Math.cos(angle),\n            y: Math.sin(angle)\n        } \n        const temp = new _shoot__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.x +10,this.y+20, velocity, false)\n        this.ghostShoots.push(temp);\n    }\n\n    shoot(ctx,player,gameover,animationId,score,gameOverModal,bgm,finalScore){\n        this.ghostShoots.forEach((shoot,idx)=>{\n            shoot.update(ctx);\n            this.shootCheck(player,shoot,idx,gameover,animationId,score,gameOverModal,bgm,finalScore);\n        })\n    }\n\n    shootCheck(player,shoot,idx,gameover,animationId,score,gameOverModal,bgm,finalScore){\n        const dist = Math.hypot(player.x - shoot.x, player.y - shoot.y)\n        if(dist - player.radius - shoot.radius < 1){\n            setTimeout(()=>{\n                this.ghostShoots.splice(idx,1);\n            },0)\n            gameover = true;\n            const gameoverAudio = new Audio(\"./src/audio/gameover.wav\");\n            bgm.pause();\n            gameoverAudio.play();\n\n            cancelAnimationFrame(animationId);\n            finalScore.innerHTML = score;\n            gameOverModal.style.display = \"flex\"\n        }\n        if(shoot.x < 100 || shoot.y < 100 || shoot.x > 700 || shoot.y > 550){\n            setTimeout(()=>{\n                this.ghostShoots.splice(idx,1);\n            },0)\n        }\n    }\n\n    updateMonsterLocation(player,ctx){\n        const angle = Math.atan2(player.y - this.y, player.x - this.x)\n        const velocities = {\n            x: Math.cos(angle),\n            y: Math.sin(angle)\n        }\n        this.velocity = velocities;\n        this.frameX = player.frameX;\n        if(player.frameY === 0){\n            if(player.y < this.y){\n                this.frameY = 3;\n            }else{\n                this.frameY = 0;\n            }\n        }else if(player.frameY === 1){\n            if(player.x < this.x){\n                this.frameY = 1;\n            }else{\n                this.frameY = 2;\n            }\n        }else if(player.frameY === 2){\n            if(player.x < this.x){\n                this.frameY = 1;\n            }else{\n                this.frameY = 2;\n            }\n        }else if(player.frameY === 3){\n            if(player.y < this.y){\n                this.frameY = 3;\n            }else{\n                this.frameY = 0;\n            }\n        }\n        this.handleMonsterFrame();\n        this.draw(ctx);\n    }\n\n    handleMonsterFrame(){\n        if (this.frameX < 3){\n            this.frameX++;\n        }else{\n            this.frameX = 0;\n        }\n    }\n\n    clear(){\n        clearInterval(this.intervalId);\n    }\n}\n\n//# sourceURL=webpack:///./src/ghost.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ghost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ghost */ \"./src/ghost.js\");\n/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster */ \"./src/monster.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _shoot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shoot */ \"./src/shoot.js\");\n\n\n\n\n\nconst canvas = document.getElementById('game');\nconst ctx = canvas.getContext(\"2d\");\n\nconst scoreBox = document.getElementById(\"score\");\nconst tryAgainBtn = document.getElementById(\"try_again_btn\");\nconst gameOverModal = document.getElementById(\"gameOverModal\");\nconst gameStartModal = document.getElementById(\"start-modal\")\nconst finalScore = document.getElementById(\"game-over-score\");\nconst startGame = document.getElementById(\"start\");\nconst pauseBGM = document.getElementById(\"pause-bgm\");\nconst fireballCounts = document.getElementById(\"fireball-count\")\nlet bgm = new Audio(\"https://hicamp-seed.s3-us-west-1.amazonaws.com/Yoann13.flac\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ctx);\n\nlet player = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](200,200)\nlet playerPict = new Image();\nplayerPict.src = \"./src/images/player1.png\";\nlet background = new Image();\nbackground.src = \"./src/images/background.jpg\"\nlet shoots = [];\nlet monsters = [];\nlet ghostShoots = [];\nlet fpsInterval, startTime, now, then, elapsed;\nlet animationId;\nlet score = 0;\nlet music;\nlet level;\nlet gameover;\nlet lvOne;\nlet lvTwo;\nlet lvThree;\n\nfunction initGame() {\n    player = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](canvas.width/2,canvas.height/2)\n    playerPict = new Image();\n    playerPict.src = \"./src/images/player1.png\";\n    background = new Image();\n    background.src = \"./src/images/background.jpg\"\n    shoots = []\n    monsters = []\n    score = 0\n    scoreBox.innerHTML = score;\n    music = true;\n    level = 1;\n    gameover=false;\n    clearInterval(lvOne);\n    clearInterval(lvTwo);\n    clearInterval(lvThree);\n}\n\n\nfunction drawPlayer(img,sX, sY, sW, sH, dX, dY, dW, dH) {\n    ctx.drawImage(img,sX, sY, sW, sH, dX, dY, dW, dH);\n}\n\n\nwindow.addEventListener(\"keydown\", function (e) {\n    if(e.keyCode === 65 || e.keyCode === 68 || e.keyCode === 83 || e.keyCode === 87){\n        player.keys[e.keyCode] = true;\n        player.moving = true;\n    }\n})\n\nwindow.addEventListener(\"keyup\", function (e) {\n    if(e.keyCode === 65 || e.keyCode === 68 || e.keyCode === 83 || e.keyCode === 87){\n        delete player.keys[e.keyCode];\n        player.moving = false;\n    }\n})\n\nfunction getMousePos(canvas, e) {\n    var rect = canvas.getBoundingClientRect();\n    let scaleX = canvas.width / rect.width;   \n    let scaleY = canvas.height / rect.height;\n    return {\n      x: (e.clientX - rect.left) * scaleX,\n      y: (e.clientY - rect.top) * scaleY\n    };\n}\ncanvas.addEventListener('click', function(e){\n    const pos = getMousePos(canvas, e)\n    const angle = Math.atan2(pos.y - player.y, pos.x - player.x)\n\n    const velocity = {\n        x: Math.cos(angle) * 3,\n        y: Math.sin(angle) * 3\n    } \n\n    if(shoots.length < 5){\n        const fireball = new Audio(\"./src/audio/fireball.mp3\")\n        fireball.play();\n        shoots.push(new _shoot__WEBPACK_IMPORTED_MODULE_3__[\"default\"](player.x +10,player.y+20, velocity, true))\n    }\n\n    setInterval(()=>{\n        let temp = 5 - shoots.length;\n        if(temp === 0){\n            fireballCounts.innerHTML = \"0 RELOADING!\"\n            fireballCounts.style.color = \"red\";\n        }else{\n            fireballCounts.innerHTML = 5 - shoots.length;\n            fireballCounts.style.color = \"white\";\n        }\n    },100)\n\n});\n\nconst throttle = (func, limit) => {\n    let inThrottle\n    return function() {\n      const args = arguments\n      const context = this\n      if (!inThrottle) {\n        func.apply(context, args)\n        inThrottle = true\n        setTimeout(() => inThrottle = false, limit)\n      }\n    }\n}\n\n// function test(monster){\n//     monster.ghostBulet(player);\n// }\n// test()\n\n// let testing = throttle(test,2000)\n\n\nfunction startAnimating(fps){\n    fpsInterval = 1000/fps;\n    then = Date.now();\n    startTime = then;\n    animate()\n}\n\nfunction animate(){\n    animationId = requestAnimationFrame(animate);\n    now = Date.now();\n    elapsed = now - then;\n    if(elapsed > fpsInterval){\n        then = now - (elapsed % fpsInterval);\n        ctx.clearRect(0,0, canvas.clientWidth, canvas.height);\n        ctx.drawImage(background,0,0,800,600);\n        drawPlayer(playerPict,player.width * player.frameX, player.height*player.frameY,player.width, player.height, player.x,player.y,player.width, player.height);\n        player.movePlayer();\n        player.handlePlayerFrame();\n    }\n\n    shoots.forEach((shoot)=>{\n        shoot.update(ctx)\n    })\n\n    monsters.forEach((monster,idx1)=>{\n\n        monster.updateMonsterLocation(player,ctx)\n        const monsterToPlayer = Math.hypot(player.x - monster.x, player.y - monster.y);\n        \n        if(monster instanceof _ghost__WEBPACK_IMPORTED_MODULE_0__[\"default\"]){\n            monster.shoot(ctx,player,gameover,animationId,score,gameOverModal,bgm,finalScore);\n        }\n\n        //end game\n        if(monsterToPlayer - monster.radius - player.size< 1){\n            gameover = true;\n            const gameoverAudio = new Audio(\"./src/audio/gameover.wav\");\n            bgm.pause();\n            gameoverAudio.play();\n\n            cancelAnimationFrame(animationId);\n            finalScore.innerHTML = score;\n            gameOverModal.style.display = \"flex\"\n       }\n\n        shoots.forEach((shoot,idx2)=>{\n           const dist =  Math.hypot(shoot.x - monster.x,shoot.y - monster.y)\n           if(dist - monster.radius - shoot.radius < 1 && shoot.bulletProof){\n                if(monster instanceof _ghost__WEBPACK_IMPORTED_MODULE_0__[\"default\"]){\n                    monster.clear();\n                }\n                const dead = new Audio(\"./src/audio/dead.mp3\");\n                dead.play();\n                setTimeout(()=>{\n                    monsters.splice(idx1,1);\n                    shoots.splice(idx2,1);\n                },0)\n                score +=100;\n                scoreBox.innerHTML = score; \n           }\n           if(shoot.x < 100 || shoot.y < 100 || shoot.x > 700 || shoot.y > 550){\n                setTimeout(()=>{\n                    shoots.splice(idx2,1);\n                },0)\n           }\n        })\n    })\n}\nfunction spawnMonsters(){\n    lvOne = setInterval(()=>{\n        let x;\n        let y;\n        // setInterval(()=>{\n        //     if(gameover){\n        //         clearInterval(lvOne);\n        //     }\n        // },100)\n        if(score >= 500){\n            clearInterval(lvOne);\n            secLevel();\n        }\n        if (Math.random() < 0.5){\n            x = Math.random() < 0.5 ? 150 : canvas.width - 150;\n            y = Math.random() < 0.5 ? 100 : canvas.height - 150;\n        }else{\n            x = Math.random() < 0.5 ? 150 : canvas.width - 150;\n            y = Math.random() < 0.5 ? 150 : canvas.height - 100;\n        }\n        const angle = Math.atan2(player.y - y, player.x - x)\n        const velocity = {\n        x: Math.cos(angle),\n        y: Math.sin(angle)\n        }\n        monsters.push(new _monster__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x,y,velocity))\n    },4000)\n}\n\nfunction secLevel(){\n    lvTwo = setInterval(()=>{\n        let x;\n        let y;\n        setInterval(()=>{\n            if(gameover){\n                clearInterval(lvTwo);\n            }\n        },100)\n        if(score >= 1000){\n            clearInterval(lvTwo);\n            thridLevel();\n        }\n        if (Math.random() < 0.5){\n            x = Math.random() < 0.5 ? 150 : canvas.width - 150;\n            y = Math.random() < 0.5 ? 100 : canvas.height - 150;\n        }else{\n            x = Math.random() < 0.5 ? 150 : canvas.width - 150;\n            y = Math.random() < 0.5 ? 150 : canvas.height - 100;\n        }\n        const angle = Math.atan2(player.y - y, player.x - x)\n        const velocity = {\n        x: Math.cos(angle),\n        y: Math.sin(angle)\n        }\n        monsters.push(new _monster__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x,y,velocity))\n    },2000)\n}\nfunction thridLevel(){\n    lvThree = setInterval(()=>{\n        let x;\n        let y;\n        if (Math.random() < 0.5){\n            x = Math.random() < 0.5 ? 150 : canvas.width - 150;\n            y = Math.random() < 0.5 ? 100 : canvas.height - 150;\n        }else{\n            x = Math.random() < 0.5 ? 150 : canvas.width - 150;\n            y = Math.random() < 0.5 ? 150 : canvas.height - 100;\n        }\n        const angle = Math.atan2(player.y - y, player.x - x)\n        const velocity = {\n        x: Math.cos(angle),\n        y: Math.sin(angle)\n        }\n        monsters.push(new _ghost__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x,y,velocity,player))\n    },5000)\n\n    lvTwo=setInterval(()=>{\n        let x;\n        let y;\n    \n        if (Math.random() < 0.5){\n            x = Math.random() < 0.5 ? 150 : canvas.width - 150;\n            y = Math.random() < 0.5 ? 100 : canvas.height - 150;\n        }else{\n            x = Math.random() < 0.5 ? 150 : canvas.width - 150;\n            y = Math.random() < 0.5 ? 150 : canvas.height - 100;\n        }\n        const angle = Math.atan2(player.y - y, player.x - x)\n        const velocity = {\n        x: Math.cos(angle),\n        y: Math.sin(angle)\n        }\n        monsters.push(new _monster__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x,y,velocity))\n    },3000)\n}\ntryAgainBtn.addEventListener(\"click\",()=>{\n    bgm = new Audio(\"https://hicamp-seed.s3-us-west-1.amazonaws.com/Yoann13.flac\");\n    bgm.loop = true;\n    bgm.play();\n    initGame()\n    startAnimating(30);\n    spawnMonsters();\n    gameOverModal.style.display = \"none\";\n})\nstartGame.addEventListener(\"click\",(e)=>{\n    // e.preventDefault();\n    initGame()\n    startAnimating(30);\n    spawnMonsters();\n    gameStartModal.style.display = \"none\";\n    pauseBGM.innerHTML = \"OFF\"\n    bgm.play();\n    bgm.loop = true;\n    \n})\n\npauseBGM.addEventListener('click',(e)=>{\n    e.preventDefault();\n    if(music){\n        pauseBGM.innerHTML=\"ON\"\n        bgm.pause();\n        music = false;\n    }else{\n        bgm.play();\n        music=true;\n        pauseBGM.innerHTML=\"OFF\"\n    }\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/monster.js":
/*!************************!*\
  !*** ./src/monster.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Monster; });\nclass Monster{\n    constructor(x,y,velocity){\n        this.x = x;\n        this.y = y;\n        this.radius = 20;\n        this.velocity = velocity\n        this.width = 33;\n        this.height = 32;\n        this.frameX = 0;\n        this.frameY = 0;\n        this.speed = 1;\n        \n        this.draw = this.draw.bind(this);\n        this.update = this.update.bind(this);\n        this.updateMonsterLocation = this.updateMonsterLocation.bind(this);\n        this.handleMonsterFrame = this.handleMonsterFrame.bind(this);\n    }\n    draw(ctx){\n        // ctx.beginPath()\n        // ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)\n        // ctx.fillStyle = this.color;\n        // ctx.fill();\n        const monster = new Image();\n        monster.src = \"./src/images/monster1.png\";\n        ctx.drawImage(monster,this.width * this.frameX, this.height* this.frameY, this.width, this.height, this.x,this.y,this.width, this.height);\n    }\n\n    update(ctx){\n        this.draw(ctx)\n        this.x = this.x + this.velocity.x\n        this.y = this.y + this.velocity.y\n    }\n\n    updateMonsterLocation(player,ctx){\n        const angle = Math.atan2(player.y - this.y, player.x - this.x)\n        const velocities = {\n            x: Math.cos(angle),\n            y: Math.sin(angle)\n        }\n        this.velocity = velocities;\n        this.frameX = player.frameX;\n        if(player.frameY === 0){\n            if(player.y < this.y){\n                this.frameY = 3;\n            }else{\n                this.frameY = 0;\n            }\n        }else if(player.frameY === 1){\n            if(player.x < this.x){\n                this.frameY = 1;\n            }else{\n                this.frameY = 2;\n            }\n        }else if(player.frameY === 2){\n            if(player.x < this.x){\n                this.frameY = 1;\n            }else{\n                this.frameY = 2;\n            }\n        }else if(player.frameY === 3){\n            if(player.y < this.y){\n                this.frameY = 3;\n            }else{\n                this.frameY = 0;\n            }\n        }\n        // this.frameY = player.frameY;\n        this.handleMonsterFrame();\n        this.update(ctx);\n    }\n    handleMonsterFrame(){\n        if (this.frameX < 3){\n            this.frameX++;\n        }else{\n            this.frameX = 0;\n        }\n    }\n\n}\n\n//# sourceURL=webpack:///./src/monster.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\nclass Player {\n    constructor(x,y){\n        this.x = x;\n        this.y = y;\n        this.radius = 20;\n        this.width = 32;\n        this.height = 52;\n        this.frameX = 0;\n        this.frameY = 0;\n        this.speed = 7;\n        this.moving = false;\n        this.keys = [];\n        this.size = 9;\n    }\n\n    movePlayer(){\n        if (this.keys[87] && this.y>100){\n            this.y -= this.speed;\n            this.frameY = 3;\n            this.moving = true;\n            \n        }\n        if (this.keys[83] && this.y<500){\n            this.y += this.speed;\n            this.frameY = 0;\n            this.moving = true;\n        }\n        if (this.keys[65] && this.x>100){\n            this.x -= this.speed;\n            this.frameY = 1;\n            this.moving = true;\n            // console.log(this.frameY)\n        }\n        if (this.keys[68]&& this.x<650){\n            this.x += this.speed;\n            this.frameY = 2;\n            this.moving = true;\n        }\n    }\n\n    handlePlayerFrame(){\n        if (this.frameX < 3 && this.moving){\n            this.frameX++;\n        }else{\n            this.frameX = 0;\n        }\n    }\n\n}\n\n\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/shoot.js":
/*!**********************!*\
  !*** ./src/shoot.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Shoot; });\n// import {ctx} from \"./index.js\"\nclass Shoot{\n    constructor(x,y,velocity,bulletProof){\n        this.x = x;\n        this.y = y;\n        this.radius = 10;\n        this.color = \"red\";\n        this.velocity = velocity\n        this.width = 20;\n        this.height = 20;\n        this.draw = this.draw.bind(this)\n        this.bulletProof = bulletProof\n    }\n    draw(ctx){\n        const fireball = new Image();\n        if(this.bulletProof){\n            fireball.src = \"./src/images/fireball1.png\";\n        }else{\n            fireball.src = \"./src/images/2.png\";\n        }\n        ctx.drawImage(fireball,this.x,this.y,this.width,this.height);\n    }\n\n    update(ctx){\n        this.draw(ctx)\n        this.x = this.x + this.velocity.x\n        this.y = this.y + this.velocity.y\n    }\n\n    fireballCounts(el,shoots){\n        for(let i = 0; i < shoots.length; i++){\n            const fireball = new Image();\n            fireball.src = \"./src/images/fireball1.png\";\n            el.innerHTML = fireball\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/shoot.js?");

/***/ })

/******/ });