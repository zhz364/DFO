import Shoot from "./shoot"
export default class Ghost{
    constructor(x,y,velocity){
        this.x = x;
        this.y = y;
        this.radius = 19;
        this.velocity = velocity
        this.width = 35;
        this.height = 45;
        this.frameX = 0;
        this.frameY = 0;
        this.speed = 1;
        this.ghostShoots=[]
        
        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);
        this.updateMosterLocation = this.updateMosterLocation.bind(this);
        this.handleMonsterFrame = this.handleMonsterFrame.bind(this);
        this.shoot = this.shoot.bind(this);
        this.shootCheck = this.shootCheck.bind(this);
        
    }
    
    draw(ctx){
        // ctx.beginPath()
        // ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        // ctx.fillStyle = this.color;
        // ctx.fill();
        const monster = new Image();
        monster.src = "./src/images/monster2.png";
        ctx.drawImage(monster,this.width * this.frameX, this.height* this.frameY, this.width, this.height, this.x,this.y,this.width, this.height);
    }
    ghostBulet(player,ctx){
        // setInterval(()=>{
            const angle = Math.atan2(player.y - this.y, player.x - this.x)
            const velocity = {
                x: Math.cos(angle),
                y: Math.sin(angle)
            } 
            // for(let i = 0; i < 5;i++){
                const temp = new Shoot(this.x +10,this.y+20, velocity, false)
                this.ghostShoots.push(temp);
                // temp.update(ctx)
            // }
        // this.shoot(ctx)
        // },5000)
    }
    shoot(ctx,player,gameover,animationId,score,gameOverModal,bgm,finalScore){
        // if( this.ghostShoots.length > 0){
        //     this.ghostShoots.pop().update(ctx)
        //     // const fireball = new Audio("./src/audio/fireball.mp3")
        //     // fireball.play();
        // }
        this.ghostShoots.forEach((shoot,idx)=>{
            shoot.update(ctx);
            this.shootCheck(player,shoot,idx,gameover,animationId,score,gameOverModal,bgm,finalScore);
        })
    }
    shootCheck(player,shoot,idx,gameover,animationId,score,gameOverModal,bgm,finalScore){
        const dist = Math.hypot(player.x - shoot.x, player.y - shoot.y)
        console.log(dist - player.radius - shoot.radius)
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

    update(ctx){
        this.draw(ctx)
        // this.x = this.x + this.velocity.x
        // this.y = this.y + this.velocity.y

    }

    updateMosterLocation(player,ctx){
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
        // this.frameY = player.frameY;
        this.handleMonsterFrame();
        this.update(ctx);
    }
    handleMonsterFrame(){
        if (this.frameX < 3){
            this.frameX++;
        }else{
            this.frameX = 0;
        }
    }

}