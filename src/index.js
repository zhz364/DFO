import Player from"./player.js"

const canvas = document.getElementById('game');
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();

// const playerPict = new Image();
// playerPict.src = "./src/player1.png";
// ctx.drawImage(playerPict,95,45,34, 52,0,0,34, 52)
const player = new Player(200,200,"./images/player1.png")
const playerPict = new Image();
playerPict.src = "./src/player1.png";

// ctx.onload = function() {
//     ctx.drawImage(playerPict,100,10,player.width,player.height);
// }
function drawPlayer(img,sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img,sX, sY, sW, sH, dX, dY, dW, dH);
}


function animate() {
    ctx.clearRect(0,0, canvas.clientWidth, canvas.height);
    drawPlayer(playerPict,0,0,player.width, player.height,0,0,player.width, player.height);
    // ctx.drawImage(playerPict,130,130,130,130);
    requestAnimationFrame(animate);
}

animate();
// // ctx.drawImage(playerPict,player.width,player.height);
// // drawPlayer(playerPict,10,10,34, 52,10,100,52, 34);