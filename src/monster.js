export default class Monster{
    constructor(x,y,velocity){
        this.x = x;
        this.y = y;
        this.radius = 15;
        this.color = "blue";
        this.velocity = velocity
        this.width = 33;
        this.height = 32;
        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);
    }
    draw(ctx){
        // ctx.beginPath()
        // ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        // ctx.fillStyle = this.color;
        // ctx.fill();
        const monster = new Image();
        monster.src = "./src/images/monster1.png";
        ctx.drawImage(monster,0, 0,this.width, this.height, this.x, this.y,this.width, this.height);
        // ctx.drawImage(monster,this.width, this.height);

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
        this.update(ctx);
    }
}