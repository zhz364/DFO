export default class Monster{
    constructor(x,y,velocity){
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.color = "blue";
        this.velocity = velocity
        this.draw = this.draw.bind(this)
    }
    draw(ctx){
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update(ctx){
        this.draw(ctx)
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}