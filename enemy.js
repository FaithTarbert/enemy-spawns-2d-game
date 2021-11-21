//draws each individual enemy
export default class Enemy {
    //pass entire parent game object & props to enemy class
    constructor(game) {
        this.game = game;
        //starts behind right edge of canvas width
        this.x = this.game.width;
        //randomize vertical start position
        this.y = Math.random() * this.game.height;
        this.width = 100;
        this.height = 100;
    }
    update() {
        this.x--;
    }
    //pass ctx canvas info from script.js
    draw(ctx) {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}