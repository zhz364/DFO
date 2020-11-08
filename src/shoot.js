// import {ctx} from "./index.js"
export default class Shoot{
    constructor(x,y,velocity,bulletProof){
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.color = "red";
        this.velocity = velocity
        this.width = 20;
        this.height = 20;
        this.draw = this.draw.bind(this)
        this.bulletProof = bulletProof
    }
    draw(ctx){
        const fireball = new Image();
        fireball.src = "./src/images/fireball1.png";
        ctx.drawImage(fireball,this.x,this.y,this.width,this.height);
    }

    update(ctx){
        this.draw(ctx)
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
    
    fireballCounts(el,shoots){
        for(let i = 0; i < shoots.length; i++){
            const fireball = new Image();
            fireball.src = "./src/images/fireball1.png";
            el.innerHTML = fireball
        }
    }
}
