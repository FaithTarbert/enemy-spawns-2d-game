import Enemy from './enemy.js';

window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 800;

    //draws entire game
    class Game {
        constructor() {
            this.enemies = [];
            this.#addNewEnemy();
            console.log(this.enemies);
        }
        update() {

        }
        draw() {

        }
        #addNewEnemy() {
            this.enemies.push(new Enemy())
        }
    }
    //instantiate game object
    const game = new Game();

    //animates one frame at a time in loop
    let lastTime = 1;
    function animate(timestamp) {
        //clear prev canvas drawing
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        const deltaTime = timestamp - lastTime;
        //reset timer
        lastTime = timestamp;
        requestAnimationFrame(animate)
    }
    animate(0);
});
