import Player from"./player.js"

const canvas = document.getElementById('game');
const ctx = canvas.getContext("2d");

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


// function animate() {
//     ctx.clearRect(0,0, canvas.clientWidth, canvas.height);
//     ctx.drawImage(background,0,0,800,600);
//     drawPlayer(playerPict,player.width * player.frameX, player.height*player.frameY,player.width, player.height, player.x,player.y,player.width, player.height);
//     player.movePlayer();
//     player.handlePlayerFrame();
//     requestAnimationFrame(animate);
// }

// animate();

// setInterval(function(){
//     ctx.clearRect(0,0, canvas.clientWidth, canvas.height);
//     ctx.drawImage(background,0,0,800,600);
//     drawPlayer(playerPict,player.width * player.frameX, player.height*player.frameY,player.width, player.height, player.x,player.y,player.width, player.height);
//     player.movePlayer();
//     player.handlePlayerFrame();
//     requestAnimationFrame(animate);
// },50);

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

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps){
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate()
}

function animate(){
    requestAnimationFrame(animate);
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
    
}
startAnimating(30)