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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ghost; });\nclass Ghost{\n    constructor(x,y,velocity){\n        this.x = x;\n        this.y = y;\n        this.radius = 19;\n        this.velocity = velocity\n        this.width = 35;\n        this.height = 45;\n        this.frameX = 0;\n        this.frameY = 0;\n        this.speed = 1;\n        this.ghostShoots=[]\n        \n        this.draw = this.draw.bind(this);\n        this.update = this.update.bind(this);\n        this.updateMosterLocation = this.updateMosterLocation.bind(this);\n        this.handleMonsterFrame = this.handleMonsterFrame.bind(this);\n        \n    }\n    \n    draw(ctx){\n        // ctx.beginPath()\n        // ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)\n        // ctx.fillStyle = this.color;\n        // ctx.fill();\n        const monster = new Image();\n        monster.src = \"./src/images/monster2.png\";\n        ctx.drawImage(monster,this.width * this.frameX, this.height* this.frameY, this.width, this.height, this.x,this.y,this.width, this.height);\n    }\n    shoot(){\n        \n    }\n\n    update(ctx){\n        this.draw(ctx)\n        // this.x = this.x + this.velocity.x\n        // this.y = this.y + this.velocity.y\n\n    }\n\n    updateMosterLocation(player,ctx){\n        const angle = Math.atan2(player.y - this.y, player.x - this.x)\n        const velocities = {\n            x: Math.cos(angle),\n            y: Math.sin(angle)\n        }\n        this.velocity = velocities;\n        this.frameX = player.frameX;\n        if(player.frameY === 0){\n            if(player.y < this.y){\n                this.frameY = 3;\n            }else{\n                this.frameY = 0;\n            }\n        }else if(player.frameY === 1){\n            if(player.x < this.x){\n                this.frameY = 1;\n            }else{\n                this.frameY = 2;\n            }\n        }else if(player.frameY === 2){\n            if(player.x < this.x){\n                this.frameY = 1;\n            }else{\n                this.frameY = 2;\n            }\n        }else if(player.frameY === 3){\n            if(player.y < this.y){\n                this.frameY = 3;\n            }else{\n                this.frameY = 0;\n            }\n        }\n        // this.frameY = player.frameY;\n        this.handleMonsterFrame();\n        this.update(ctx);\n    }\n    handleMonsterFrame(){\n        if (this.frameX < 3){\n            this.frameX++;\n        }else{\n            this.frameX = 0;\n        }\n    }\n\n}\n\n//# sourceURL=webpack:///./src/ghost.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ghost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ghost */ \"./src/ghost.js\");\n/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster */ \"./src/monster.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _shoot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shoot */ \"./src/shoot.js\");\n\n\n\n\n\nconst canvas = document.getElementById('game');\nconst ctx = canvas.getContext(\"2d\");\n\nconst scoreBox = document.getElementById(\"score\");\nconst tryAgainBtn = document.getElementById(\"try_again_btn\");\nconst gameOverModal = document.getElementById(\"gameOverModal\");\nconst gameStartModal = document.getElementById(\"start-modal\")\nconst finalScore = document.getElementById(\"game-over-score\");\nconst startGame = document.getElementById(\"start\");\nconst pauseBGM = document.getElementById(\"pause-bgm\");\nconst fireballCounts = document.getElementById(\"fireball-count\")\nlet bgm = new Audio(\"https://hicamp-seed.s3-us-west-1.amazonaws.com/Yoann13.flac\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (ctx);\n// ctx.beginPath();\n// ctx.arc(100, 75, 50, 0, 2 * Math.PI);\n// ctx.stroke();\n\nlet player = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](200,200)\nlet playerPict = new Image();\nplayerPict.src = \"./src/images/player1.png\";\nlet background = new Image();\nbackground.src = \"./src/images/background.jpg\"\nlet shoots = [];\nlet monsters = [];\nlet ghostShoots = [];\nlet fpsInterval, startTime, now, then, elapsed;\nlet animationId;\nlet score = 0;\nlet music;\nlet level;\nlet gameover;\n\nfunction initGame() {\n    player = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](200,200)\n    playerPict = new Image();\n    playerPict.src = \"./src/images/player1.png\";\n    background = new Image();\n    background.src = \"./src/images/background.jpg\"\n    shoots = []\n    monsters = []\n    score = 0\n    scoreBox.innerHTML = score;\n    music = true;\n    level = 1;\n    gameover=false;\n    // setTimeout(() => {\n    //     spawnMonsters();\n    // }, 0);\n    \n}\n\n// ctx.onload = function() {\n//     ctx.drawImage(playerPict,100,10,player.width,player.height);\n// }\nfunction drawPlayer(img,sX, sY, sW, sH, dX, dY, dW, dH) {\n    ctx.drawImage(img,sX, sY, sW, sH, dX, dY, dW, dH);\n}\n\n\nwindow.addEventListener(\"keydown\", function (e) {\n    if(e.keyCode === 65 || e.keyCode === 68 || e.keyCode === 83 || e.keyCode === 87){\n        player.keys[e.keyCode] = true;\n        player.moving = true;\n    }\n    // console.log(player.keys)\n})\n\nwindow.addEventListener(\"keyup\", function (e) {\n    if(e.keyCode === 65 || e.keyCode === 68 || e.keyCode === 83 || e.keyCode === 87){\n        delete player.keys[e.keyCode];\n        player.moving = false;\n    }\n})\n\nfunction getMousePos(canvas, e) {\n    var rect = canvas.getBoundingClientRect();\n    let scaleX = canvas.width / rect.width;   \n    let scaleY = canvas.height / rect.height;\n    return {\n      x: (e.clientX - rect.left) * scaleX,\n      y: (e.clientY - rect.top) * scaleY\n    };\n}\ncanvas.addEventListener('click', function(e){\n    const pos = getMousePos(canvas, e)\n    const angle = Math.atan2(pos.y - player.y, pos.x - player.x)\n    // console.log(angle)\n    const velocity = {\n        x: Math.cos(angle) * 3,\n        y: Math.sin(angle) * 3\n    } \n    if(shoots.length < 5){\n        const fireball = new Audio(\"./src/audio/fireball.mp3\")\n        fireball.play();\n        shoots.push(new _shoot__WEBPACK_IMPORTED_MODULE_3__[\"default\"](player.x +10,player.y+20, velocity, true))\n    }\n    setInterval(()=>{\n        let temp = 5 - shoots.length;\n        if(temp === 0){\n            fireballCounts.innerHTML = \"0 RELOADING!\"\n            fireballCounts.style.color = \"red\";\n        }else{\n            fireballCounts.innerHTML = 5 - shoots.length;\n            fireballCounts.style.color = \"white\";\n        }\n\n    },100)\n});\n\n// let fpsInterval, startTime, now, then, elapsed;\n\n\nfunction startAnimating(fps){\n    fpsInterval = 1000/fps;\n    then = Date.now();\n    startTime = then;\n    animate()\n}\n\nfunction animate(){\n    animationId = requestAnimationFrame(animate);\n    // ctx.clearRect(0,0, canvas.clientWidth, canvas.height);\n    now = Date.now();\n    elapsed = now - then;\n    if(elapsed > fpsInterval){\n        then = now - (elapsed % fpsInterval);\n        ctx.clearRect(0,0, canvas.clientWidth, canvas.height);\n        ctx.drawImage(background,0,0,800,600);\n        drawPlayer(playerPict,player.width * player.frameX, player.height*player.frameY,player.width, player.height, player.x,player.y,player.width, player.height);\n        player.movePlayer();\n        player.handlePlayerFrame();\n    }\n\n    shoots.forEach((shoot)=>{\n        shoot.update(ctx)\n    })\n\n    // ghostShoots.forEach((shoot)=>{\n    //     shoot.update(ctx)\n    // })\n    monsters.forEach((monster,idx1)=>{\n        // monster.update(ctx);\n        monster.updateMosterLocation(player,ctx)\n        const monsterToPlayer = Math.hypot(player.x - monster.x, player.y - monster.y);\n        // console.log(monster.constructor)\n        if(monster.constructor === \"Ghost\"){\n            ghostBulet(monster)\n        }\n        ghostShoots.forEach((shoot)=>{\n            shoot.update(ctx)\n        })\n        //end game\n        if(monsterToPlayer - monster.radius - player.size< 1){\n            gameover = true;\n            const gameoverAudio = new Audio(\"./src/audio/gameover.wav\");\n            bgm.pause();\n            gameoverAudio.play();\n\n            cancelAnimationFrame(animationId);\n            finalScore.innerHTML = score;\n            gameOverModal.style.display = \"flex\"\n       }\n       // Ghost shoots\n        ghostShoots\n\n        shoots.forEach((shoot,idx2)=>{\n           const dist =  Math.hypot(shoot.x - monster.x,shoot.y - monster.y)\n           if(dist - monster.radius - shoot.radius< 1 && shoot.bulletProof){\n                const dead = new Audio(\"./src/audio/dead.mp3\");\n                dead.play();\n                setTimeout(()=>{\n                    monsters.splice(idx1,1);\n                    shoots.splice(idx2,1);\n                },0)\n                score +=100;\n                scoreBox.innerHTML = score; \n           }\n           if(shoot.x < 100 || shoot.y < 100 || shoot.x > 700 || shoot.y > 550){\n                setTimeout(()=>{\n                    shoots.splice(idx2,1);\n                },0)\n           }\n        })\n    })\n}\nfunction spawnMonsters(){\n    const lvOne = setInterval(()=>{\n        let x;\n        let y;\n        setInterval(()=>{\n            if(gameover){\n                clearInterval(lvOne);\n            }\n        },100)\n        if(score >= 100){\n            clearInterval(lvOne);\n            secLevel();\n        }\n        if (Math.random() < 0.5){\n            x = Math.random() < 0.5 ? 150 : canvas.width - 150;\n            y = Math.random() < 0.5 ? 100 : canvas.height - 150;\n        }else{\n            x = Math.random() < 0.5 ? 150 : canvas.width - 150;\n            y = Math.random() < 0.5 ? 150 : canvas.height - 100;\n        }\n        const angle = Math.atan2(player.y - y, player.x - x)\n        const velocity = {\n        x: Math.cos(angle),\n        y: Math.sin(angle)\n        }\n        monsters.push(new _monster__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x,y,velocity))\n    },4000)\n}\n\nfunction secLevel(){\n    const lvTwo = setInterval(()=>{\n        let x;\n        let y;\n        setInterval(()=>{\n            if(gameover){\n                clearInterval(lvTwo);\n            }\n        },100)\n        if(score >= 200){\n            clearInterval(lvTwo);\n            thridLevel();\n        }\n        if (Math.random() < 0.5){\n            x = Math.random() < 0.5 ? 150 : canvas.width - 150;\n            y = Math.random() < 0.5 ? 100 : canvas.height - 150;\n        }else{\n            x = Math.random() < 0.5 ? 150 : canvas.width - 150;\n            y = Math.random() < 0.5 ? 150 : canvas.height - 100;\n        }\n        const angle = Math.atan2(player.y - y, player.x - x)\n        const velocity = {\n        x: Math.cos(angle),\n        y: Math.sin(angle)\n        }\n        monsters.push(new _monster__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x,y,velocity))\n    },3000)\n}\nfunction thridLevel(){\n    const lvTwo = setInterval(()=>{\n        let x;\n        let y;\n        setInterval(()=>{\n            if(gameover){\n                clearInterval(lvTwo);\n            }\n        },100)\n        if (Math.random() < 0.5){\n            x = Math.random() < 0.5 ? 150 : canvas.width - 150;\n            y = Math.random() < 0.5 ? 100 : canvas.height - 150;\n        }else{\n            x = Math.random() < 0.5 ? 150 : canvas.width - 150;\n            y = Math.random() < 0.5 ? 150 : canvas.height - 100;\n        }\n        const angle = Math.atan2(player.y - y, player.x - x)\n        const velocity = {\n        x: Math.cos(angle),\n        y: Math.sin(angle)\n        }\n        monsters.push(new _ghost__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x,y,velocity))\n    },5000)\n    // const lvThree=setInterval(()=>{\n    //     let x;\n    //     let y;\n    //     setInterval(()=>{\n    //         if(gameover){\n    //             clearInterval(lvThree);\n    //         }\n    //     },100)\n    //     if (Math.random() < 0.5){\n    //         x = Math.random() < 0.5 ? 150 : canvas.width - 150;\n    //         y = Math.random() < 0.5 ? 100 : canvas.height - 150;\n    //     }else{\n    //         x = Math.random() < 0.5 ? 150 : canvas.width - 150;\n    //         y = Math.random() < 0.5 ? 150 : canvas.height - 100;\n    //     }\n    //     const angle = Math.atan2(player.y - y, player.x - x)\n    //     const velocity = {\n    //     x: Math.cos(angle),\n    //     y: Math.sin(angle)\n    //     }\n    //     monsters.push(new Monster(x,y,velocity))\n    // },2000)\n}\ntryAgainBtn.addEventListener(\"click\",()=>{\n    bgm = new Audio(\"https://hicamp-seed.s3-us-west-1.amazonaws.com/Yoann13.flac\");\n    bgm.play();\n    initGame()\n    startAnimating(30);\n    spawnMonsters();\n    gameOverModal.style.display = \"none\";\n})\nstartGame.addEventListener(\"click\",(e)=>{\n    // e.preventDefault();\n    initGame()\n    startAnimating(30);\n    spawnMonsters();\n    gameStartModal.style.display = \"none\";\n    pauseBGM.innerHTML = \"OFF\"\n    bgm.play();\n})\n\npauseBGM.addEventListener('click',(e)=>{\n    e.preventDefault();\n    if(music){\n        pauseBGM.innerHTML=\"ON\"\n        bgm.pause();\n        music = false;\n    }else{\n        bgm.play();\n        music=true;\n        pauseBGM.innerHTML=\"OFF\"\n    }\n})\n\nfunction ghostBulet(ghost){\n    const angle = Math.atan2(player.y - ghost.y, player.x - ghost.x)\n    const velocity = {\n        x: Math.cos(angle) * 2,\n        y: Math.sin(angle) * 2\n    } \n    \n    const fireball = new Audio(\"./src/audio/fireball.mp3\")\n    fireball.play();\n    const temp = new _shoot__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ghost.x +10,ghost.y+20, velocity, false)\n    temp.update(ctx)\n    ghostShoots.push(temp)\n    \n}\n// initGame()\n// startAnimating(30)\n// spawnMonsters()\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Shoot; });\n// import {ctx} from \"./index.js\"\nclass Shoot{\n    constructor(x,y,velocity,bulletProof){\n        this.x = x;\n        this.y = y;\n        this.radius = 10;\n        this.color = \"red\";\n        this.velocity = velocity\n        this.width = 20;\n        this.height = 20;\n        this.draw = this.draw.bind(this)\n        this.bulletProof = bulletProof\n    }\n    draw(ctx){\n        const fireball = new Image();\n        fireball.src = \"./src/images/fireball1.png\";\n        ctx.drawImage(fireball,this.x,this.y,this.width,this.height);\n    }\n\n    update(ctx){\n        this.draw(ctx)\n        this.x = this.x + this.velocity.x\n        this.y = this.y + this.velocity.y\n\n    }\n    fireballCounts(el,shoots){\n        for(let i = 0; i < shoots.length; i++){\n            const fireball = new Image();\n            fireball.src = \"./src/images/fireball1.png\";\n            el.innerHTML = fireball\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/shoot.js?");

/***/ })

/******/ });