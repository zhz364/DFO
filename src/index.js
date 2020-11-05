import Monster from "./monster";
import Player from"./player";
import Shoot from "./shoot";

const canvas = document.getElementById('game');
const ctx = canvas.getContext("2d");

const scoreBox = document.getElementById("score");
const tryAgainBtn = document.getElementById("try_again_btn");
const gameOverModal = document.getElementById("gameOverModal");
const finalScore = document.getElementById("game-over-score");
export default ctx;
// ctx.beginPath();
// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// ctx.stroke();

const player = new Player(200,200)
const playerPict = new Image();
playerPict.src = "./src/images/player1.png";
const background = new Image();
background.src = "./src/images/background.jpg"

// ctx.onload = function() {
//     ctx.drawImage(playerPict,100,10,player.width,player.height);
// }
function drawPlayer(img,sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img,sX, sY, sW, sH, dX, dY, dW, dH);
}


window.addEventListener("keydown", function (e) {
    if(e.keyCode === 65 || e.keyCode === 68 || e.keyCode === 83 || e.keyCode === 87){
        player.keys[e.keyCode] = true;
        player.moving = true;
    }
    // console.log(player.keys)
})

window.addEventListener("keyup", function (e) {
    if(e.keyCode === 65 || e.keyCode === 68 || e.keyCode === 83 || e.keyCode === 87){
        delete player.keys[e.keyCode];
        player.moving = false;
    }
})

const shoots = []
const monsters = []

function getMousePos(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    let scaleX = canvas.width / rect.width;   
    let scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
}
window.addEventListener('click', function(e){
    const pos = getMousePos(canvas, e)
    const angle = Math.atan2(pos.y - player.y, pos.x - player.x)
    // console.log(angle)
    const velocity = {
        x: Math.cos(angle) * 3,
        y: Math.sin(angle) * 3
    }
    shoots.push(new Shoot(player.x +10,player.y+20, velocity))
});

let fpsInterval, startTime, now, then, elapsed;


function startAnimating(fps){
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate()
}

let animationId;
let score = 0;
scoreBox.innerHTML = score;
function animate(){
    animationId = requestAnimationFrame(animate);
    // ctx.clearRect(0,0, canvas.clientWidth, canvas.height);
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
        // monster.update(ctx);
        monster.updateMosterLocation(player,ctx)
        const monsterToPlayer = Math.hypot(player.x - monster.x, player.y - monster.y);
        //end game
        if(monsterToPlayer - monster.radius - player.size< 1){
            cancelAnimationFrame(animationId);
        gameOverModal.style.display = "flex"
       }
        shoots.forEach((shoot,idx2)=>{
           const dist =  Math.hypot(shoot.x - monster.x,shoot.y - monster.y)
           if(dist - monster.radius - shoot.radius< 1){
                setTimeout(()=>{
                    monsters.splice(idx1,1);
                    shoots.splice(idx2,1);
                },0)
                score +=100;
                finalScore.innerHTML = score;
                scoreBox.innerHTML = score; 
           }
           if(shoot.x < 100 || shoot.y < 150 || shoot.x > 700 || shoot.y > 500){
                setTimeout(()=>{
                    shoots.splice(idx2,1);
                },0)
           }
        })
    })
}
function spawnMonsters(){
    setInterval(()=>{
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
    startAnimating(30);
    spawnMonsters();
    gameOverModal.style.display = "none";
})
startAnimating(30)
spawnMonsters()
