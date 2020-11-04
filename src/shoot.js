// import {ctx} from "./index.js"
export default class Shoot{
    constructor(x,y,velocity){
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.color = "red";
        this.velocity = velocity
        this.width = 20;
        this.height = 20;
        this.draw = this.draw.bind(this)
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
}

// window.addEventListener('click', function(e){
//     const shoot = new Shoot(event.clientX,event.clientY)
//     shoot.draw()
// });