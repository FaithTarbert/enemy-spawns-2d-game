//draws each individual enemy
export default class Enemy {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.width = 100;
        this.height = 100;
    }
    update() {
        this.x--;
    }
    draw() {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}