import Enemy from './enemy.js';

//caps means global variables
window.addEventListener('load', function () {
    const CANVAS = document.getElementById('canvas1');
    const CTX = CANVAS.getContext('2d');
    CANVAS.width = 500;
    CANVAS.height = 800;

    //draws entire game
    class Game {
        //local scoped canvass vars passed from new Game() instantiation
        constructor(ctx, width, height) {
            this.ctx = ctx;
            this.width = width;
            this.height = height;
            this.enemies = [];
            this.#addNewEnemy();
        }
        update() {
            this.enemies.forEach(enemy => enemy.update());
        }
        draw() {
            //pass canvas ctx info to Enemy class module
            this.enemies.forEach(enemy => enemy.draw(this.ctx));
        }
        #addNewEnemy() {
            //linked to Enemy child module/class, pass entire game object & props
            this.enemies.push(new Enemy(this));
        }
    }
    //instantiate game object with global canvas variables
    const game = new Game(CTX, CANVAS.width, CANVAS.height);

    //animates one frame at a time in loop
    let lastTime = 1;
    function animate(timestamp) {
        //clear prev canvas drawing
        CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
        //handle delta time
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;
        //call parent game class (runs children)
        game.update();
        game.draw();
        requestAnimationFrame(animate);
    }
    animate(0);
});
