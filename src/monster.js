export default class Monster{
    constructor(x,y,velocity){
        this.x = x;
        this.y = y;
        this.radius = 15;
        this.color = "blue";
        this.velocity = velocity
        this.width = 33;
        this.height = 32;
        this.frameX = 0;
        this.frameY = 0;
        this.speed = 1;
        
        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);
        this.updateMosterLocation = this.updateMosterLocation.bind(this);
        this.handleMonsterFrame = this.handleMonsterFrame.bind(this);
    }
    draw(ctx){
        // ctx.beginPath()
        // ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        // ctx.fillStyle = this.color;
        // ctx.fill();
        const monster = new Image();
        monster.src = "./src/images/monster1.png";
        ctx.drawImage(monster,this.width * this.frameX, this.height* this.frameY, this.width, this.height, this.x,this.y,this.width, this.height);
    }

    update(ctx){
        this.draw(ctx)
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
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