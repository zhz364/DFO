export default class Player {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 34;
        this.height = 52;
        this.frameX = 0;
        this.frameY = 0;
        this.speed = 4;
        this.moving = false;
        this.keys = []
    }

    movePlayer(){
        if (this.keys[87]){
            this.y -= this.speed
        }
        if (this.keys[83]){
            this.y += this.speed
        }
        if (this.keys[65]){
            this.x -= this.speed
        }
        if (this.keys[68]){
            this.x += this.speed
        }
    }

}


