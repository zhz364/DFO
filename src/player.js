export default class Player {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.width = 32;
        this.height = 52;
        this.frameX = 0;
        this.frameY = 0;
        this.speed = 7;
        this.moving = false;
        this.keys = [];
        this.size = 9;
    }

    movePlayer(){
        if (this.keys[87] && this.y>100){
            this.y -= this.speed;
            this.frameY = 3;
            this.moving = true;
            
        }
        if (this.keys[83] && this.y<500){
            this.y += this.speed;
            this.frameY = 0;
            this.moving = true;
        }
        if (this.keys[65] && this.x>100){
            this.x -= this.speed;
            this.frameY = 1;
            this.moving = true;
            // console.log(this.frameY)
        }
        if (this.keys[68]&& this.x<650){
            this.x += this.speed;
            this.frameY = 2;
            this.moving = true;
        }
    }

    handlePlayerFrame(){
        if (this.frameX < 3 && this.moving){
            this.frameX++;
        }else{
            this.frameX = 0;
        }
    }

}


