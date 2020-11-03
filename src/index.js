import Player from"./player.js"

const canvas = document.getElementById('game');
const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// ctx.stroke();

const player = new Player(200,200,"./images/player1.png")
const playerPict = new Image();
playerPict.src = "./src/player1.png";

function drawPlayer(img,sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img,sX, sY, sW, sH, dX, dY, dW, dH);
}

function animtate() {
    // ctx.clearRect(0,0, canvas.clientWidth, canvas.height);
    // drawPlayer(playerPict,0,0,player.width, player.height,0,0,player.height, player.width);
    ctx.drawImage(playerPict,130,130,130,130);
    // requestAnimationFrame(animtate);
}

// animtate();
ctx.drawImage(playerPict,player.width,player.height);