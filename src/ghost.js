import Shoot from "./shoot"
export default class Ghost{
    constructor(x,y,velocity,player){
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.velocity = velocity
        this.width = 35;
        this.height = 45;
        this.frameX = 0;
        this.frameY = 0;
        this.speed = 1;
        this.ghostShoots=[];
        this.player = player
        
        this.draw = this.draw.bind(this);
        this.updateMonsterLocation = this.updateMonsterLocation.bind(this);
        this.handleMonsterFrame = this.handleMonsterFrame.bind(this);   
        this.shoot = this.shoot.bind(this);
        this.shootCheck = this.shootCheck.bind(this);
        this.ghostBulet = this.ghostBulet.bind(this)
        this.intervalId = setInterval(() => {
            this.ghostBulet()
        }, 5000);
    }
    
    draw(ctx){
        const monster = new Image();
        monster.src = "./src/images/monster2.png";
        ctx.drawImage(monster,this.width * this.frameX, this.height* this.frameY, this.width, this.height, this.x,this.y,this.width, this.height);
    }

    ghostBulet(){
        const angle = Math.atan2(this.player.y - this.y, this.player.x - this.x)
        const velocity = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        } 
        const temp = new Shoot(this.x +10,this.y+20, velocity, false)
        this.ghostShoots.push(temp);
    }

    shoot(ctx,player,gameover,animationId,score,gameOverModal,bgm,finalScore){
        this.ghostShoots.forEach((shoot,idx)=>{
            shoot.update(ctx);
            this.shootCheck(player,shoot,idx,gameover,animationId,score,gameOverModal,bgm,finalScore);
        })
    }

    shootCheck(player,shoot,idx,gameover,animationId,score,gameOverModal,bgm,finalScore){
        const dist = Math.hypot(player.x - shoot.x, player.y - shoot.y)
        if(dist - player.radius - shoot.radius < 1){
            setTimeout(()=>{
                this.ghostShoots.splice(idx,1);
            },0)
            gameover = true;
            const gameoverAudio = new Audio("./src/audio/gameover.wav");
            bgm.pause();
            gameoverAudio.play();

            cancelAnimationFrame(animationId);
            finalScore.innerHTML = score;
            gameOverModal.style.display = "flex"
        }
        if(shoot.x < 100 || shoot.y < 100 || shoot.x > 700 || shoot.y > 550){
            setTimeout(()=>{
                this.ghostShoots.splice(idx,1);
            },0)
        }
    }

    updateMonsterLocation(player,ctx){
        const angle = Math.atan2(player.y - this.y, player.x - this.x)
        const velocities = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        }
        this.velocity = velocities;
        this.frameX = player.frameX;
        if(player.frameY === 0){
            if(player.y < this.y){
                this.frameY = 3;
            }else{
                this.frameY = 0;
            }
        }else if(player.frameY === 1){
            if(player.x < this.x){
                this.frameY = 1;
            }else{
                this.frameY = 2;
            }
        }else if(player.frameY === 2){
            if(player.x < this.x){
                this.frameY = 1;
            }else{
                this.frameY = 2;
            }
        }else if(player.frameY === 3){
            if(player.y < this.y){
                this.frameY = 3;
            }else{
                this.frameY = 0;
            }
        }
        this.handleMonsterFrame();
        this.draw(ctx);
    }

    handleMonsterFrame(){
        if (this.frameX < 3){
            this.frameX++;
        }else{
            this.frameX = 0;
        }
    }

    clear(){
        clearInterval(this.intervalId);
    }
}