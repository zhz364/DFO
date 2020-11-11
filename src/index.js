import Ghost from "./ghost";
import Monster from "./monster";
import Player from"./player";
import Shoot from "./shoot";

const canvas = document.getElementById('game');
const ctx = canvas.getContext("2d");

const scoreBox = document.getElementById("score");
const tryAgainBtn = document.getElementById("try_again_btn");
const gameOverModal = document.getElementById("gameOverModal");
const gameStartModal = document.getElementById("start-modal")
const finalScore = document.getElementById("game-over-score");
const startGame = document.getElementById("start");
const pauseBGM = document.getElementById("pause-bgm");
const fireballCounts = document.getElementById("fireball-count")
let bgm = new Audio("https://hicamp-seed.s3-us-west-1.amazonaws.com/Yoann13.flac");

export default ctx;

let player = new Player(200,200)
let playerPict = new Image();
playerPict.src = "./src/images/player1.png";
let background = new Image();
background.src = "./src/images/background.jpg"
let shoots = [];
let monsters = [];
let ghostShoots = [];
let fpsInterval, startTime, now, then, elapsed;
let animationId;
let score = 0;
let music;
let level;
let gameover;
let lvOne;
let lvTwo;
let lvThree;

function initGame() {
    player = new Player(canvas.width/2,canvas.height/2)
    playerPict = new Image();
    playerPict.src = "./src/images/player1.png";
    background = new Image();
    background.src = "./src/images/background.jpg"
    shoots = []
    monsters = []
    score = 0
    scoreBox.innerHTML = score;
    music = true;
    level = 1;
    gameover=false;
    clearInterval(lvOne);
    clearInterval(lvTwo);
    clearInterval(lvThree);
}


function drawPlayer(img,sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img,sX, sY, sW, sH, dX, dY, dW, dH);
}


window.addEventListener("keydown", function (e) {
    if(e.keyCode === 65 || e.keyCode === 68 || e.keyCode === 83 || e.keyCode === 87){
        player.keys[e.keyCode] = true;
        player.moving = true;
    }
})

window.addEventListener("keyup", function (e) {
    if(e.keyCode === 65 || e.keyCode === 68 || e.keyCode === 83 || e.keyCode === 87){
        delete player.keys[e.keyCode];
        player.moving = false;
    }
})

function getMousePos(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    let scaleX = canvas.width / rect.width;   
    let scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
}
canvas.addEventListener('click', function(e){
    const pos = getMousePos(canvas, e)
    const angle = Math.atan2(pos.y - player.y, pos.x - player.x)

    const velocity = {
        x: Math.cos(angle) * 3,
        y: Math.sin(angle) * 3
    } 

    if(shoots.length < 5){
        const fireball = new Audio("./src/audio/fireball.mp3")
        fireball.play();
        shoots.push(new Shoot(player.x +10,player.y+20, velocity, true))
    }

    setInterval(()=>{
        let temp = 5 - shoots.length;
        if(temp === 0){
            fireballCounts.innerHTML = "0 RELOADING!"
            fireballCounts.style.color = "red";
        }else{
            fireballCounts.innerHTML = 5 - shoots.length;
            fireballCounts.style.color = "white";
        }
    },100)

});

const throttle = (func, limit) => {
    let inThrottle
    return function() {
      const args = arguments
      const context = this
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
}

// function test(monster){
//     monster.ghostBulet(player);
// }
// test()

// let testing = throttle(test,2000)


function startAnimating(fps){
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate()
}

function animate(){
    animationId = requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if(elapsed > fpsInterval){
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0,0, canvas.clientWidth, canvas.height);
        ctx.drawImage(background,0,0,800,600);
        drawPlayer(playerPict,player.width * player.frameX, player.height*player.frameY,player.width, player.height, player.x,player.y,player.width, player.height);
        player.movePlayer();
        player.handlePlayerFrame();
    }

    shoots.forEach((shoot)=>{
        shoot.update(ctx)
    })

    monsters.forEach((monster,idx1)=>{

        monster.updateMonsterLocation(player,ctx)
        const monsterToPlayer = Math.hypot(player.x - monster.x, player.y - monster.y);
        
        if(monster instanceof Ghost){
            monster.shoot(ctx,player,gameover,animationId,score,gameOverModal,bgm,finalScore);
        }

        //end game
        if(monsterToPlayer - monster.radius - player.size< 1){
            gameover = true;
            const gameoverAudio = new Audio("./src/audio/gameover.wav");
            bgm.pause();
            gameoverAudio.play();

            cancelAnimationFrame(animationId);
            finalScore.innerHTML = score;
            gameOverModal.style.display = "flex"
       }

        shoots.forEach((shoot,idx2)=>{
           const dist =  Math.hypot(shoot.x - monster.x,shoot.y - monster.y)
           if(dist - monster.radius - shoot.radius < 1 && shoot.bulletProof){
                if(monster instanceof Ghost){
                    monster.clear();
                }
                const dead = new Audio("./src/audio/dead.mp3");
                dead.play();
                setTimeout(()=>{
                    monsters.splice(idx1,1);
                    shoots.splice(idx2,1);
                },0)
                score +=100;
                scoreBox.innerHTML = score; 
           }
           if(shoot.x < 100 || shoot.y < 100 || shoot.x > 700 || shoot.y > 550){
                setTimeout(()=>{
                    shoots.splice(idx2,1);
                },0)
           }
        })
    })
}
function spawnMonsters(){
    lvOne = setInterval(()=>{
        let x;
        let y;
        // setInterval(()=>{
        //     if(gameover){
        //         clearInterval(lvOne);
        //     }
        // },100)
        if(score >= 500){
            clearInterval(lvOne);
            secLevel();
        }
        if (Math.random() < 0.5){
            x = Math.random() < 0.5 ? 150 : canvas.width - 150;
            y = Math.random() < 0.5 ? 100 : canvas.height - 150;
        }else{
            x = Math.random() < 0.5 ? 150 : canvas.width - 150;
            y = Math.random() < 0.5 ? 150 : canvas.height - 100;
        }
        const angle = Math.atan2(player.y - y, player.x - x)
        const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
        }
        monsters.push(new Monster(x,y,velocity))
    },4000)
}

function secLevel(){
    lvTwo = setInterval(()=>{
        let x;
        let y;
        setInterval(()=>{
            if(gameover){
                clearInterval(lvTwo);
            }
        },100)
        if(score >= 1000){
            clearInterval(lvTwo);
            thridLevel();
        }
        if (Math.random() < 0.5){
            x = Math.random() < 0.5 ? 150 : canvas.width - 150;
            y = Math.random() < 0.5 ? 100 : canvas.height - 150;
        }else{
            x = Math.random() < 0.5 ? 150 : canvas.width - 150;
            y = Math.random() < 0.5 ? 150 : canvas.height - 100;
        }
        const angle = Math.atan2(player.y - y, player.x - x)
        const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
        }
        monsters.push(new Monster(x,y,velocity))
    },2000)
}
function thridLevel(){
    lvThree = setInterval(()=>{
        let x;
        let y;
        if (Math.random() < 0.5){
            x = Math.random() < 0.5 ? 150 : canvas.width - 150;
            y = Math.random() < 0.5 ? 100 : canvas.height - 150;
        }else{
            x = Math.random() < 0.5 ? 150 : canvas.width - 150;
            y = Math.random() < 0.5 ? 150 : canvas.height - 100;
        }
        const angle = Math.atan2(player.y - y, player.x - x)
        const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
        }
        monsters.push(new Ghost(x,y,velocity,player))
    },5000)

    lvTwo=setInterval(()=>{
        let x;
        let y;
    
        if (Math.random() < 0.5){
            x = Math.random() < 0.5 ? 150 : canvas.width - 150;
            y = Math.random() < 0.5 ? 100 : canvas.height - 150;
        }else{
            x = Math.random() < 0.5 ? 150 : canvas.width - 150;
            y = Math.random() < 0.5 ? 150 : canvas.height - 100;
        }
        const angle = Math.atan2(player.y - y, player.x - x)
        const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
        }
        monsters.push(new Monster(x,y,velocity))
    },3000)
}
tryAgainBtn.addEventListener("click",()=>{
    bgm = new Audio("https://hicamp-seed.s3-us-west-1.amazonaws.com/Yoann13.flac");
    bgm.play();
    initGame()
    startAnimating(30);
    spawnMonsters();
    gameOverModal.style.display = "none";
})
startGame.addEventListener("click",(e)=>{
    // e.preventDefault();
    initGame()
    startAnimating(30);
    spawnMonsters();
    gameStartModal.style.display = "none";
    pauseBGM.innerHTML = "OFF"
    bgm.play();
})

pauseBGM.addEventListener('click',(e)=>{
    e.preventDefault();
    if(music){
        pauseBGM.innerHTML="ON"
        bgm.pause();
        music = false;
    }else{
        bgm.play();
        music=true;
        pauseBGM.innerHTML="OFF"
    }
})
