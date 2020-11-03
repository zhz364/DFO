// import {ctx} from "./index.js"
export default class Shoot{
    constructor(x,y,velocity){
        this.x = x;
        this.y = y;
        this.radius = 5;
        this.color = "red";
        this.velocity = velocity
        this.draw = this.draw.bind(this)
    }
    draw(ctx){
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        ctx.fillStyle = this.color;
        ctx.fill()
        // ctx.stroke();
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