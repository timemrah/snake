import Snake from './modules/Snake.js';
import Gem from './modules/Gem.js';




//HTML:
const HTML = {};
//ARENA
HTML.arena = document.querySelector('.arena');
HTML.arena.box = HTML.arena.querySelectorAll('.box');
//BUTTON
HTML.btn = {};
HTML.btn.start  = document.getElementById('start-button');
HTML.btn.stop   = document.getElementById('stop-button');
HTML.btn.reload = document.getElementById('reload-button');
//BOARD
HTML.board = {};
HTML.board.location = {};
HTML.board.speed = document.querySelector('.board .speed .value');
HTML.board.length = document.querySelector('.board .length .value');
HTML.board.location.x = document.querySelector('.location .x');
HTML.board.location.y = document.querySelector('.location .y');
//HTML//


//DATA:
const map            = {width: 50, height: 30};
let   gameInterval   = null;
let   speed          = 10;
let   time           = 0;
//DATA//


//CREATE SNAKE INSTANCE
const gem   = new Gem(map, HTML);
const snake = new Snake(map, HTML, gem);




//START:
HTML.btn.start.addEventListener('click', e => {

    //GAME UPDATE:
    gameInterval = setInterval(()=>{

        gem.update(time);
        snake.update(time);

        time += speed;
    }, speed);
    //GAME UPDATE//


});
//START//


//STOP:
HTML.btn.stop.addEventListener('click', e => {
    clearInterval(gameInterval);
});
//STOP//


//RELOAD:
HTML.btn.reload.addEventListener('click', e => {
    clearInterval(gameInterval);
    snake.reload();
});
//RELOAD//