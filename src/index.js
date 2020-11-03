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


function animate() {
    ctx.clearRect(0,0, canvas.clientWidth, canvas.height);
    ctx.drawImage(background,0,0,800,600);
    drawPlayer(playerPict,player.width * player.frameX, player.height*player.frameY,player.width, player.height, player.x,player.y,player.width, player.height);
    player.movePlayer();
    requestAnimationFrame(animate);
}

animate();
window.addEventListener("keydown", function (e) {
    player.keys[e.keyCode] = true;
    // console.log(player.keys)
})

window.addEventListener("keyup", function (e) {
    delete player.keys[e.keyCode];
})

