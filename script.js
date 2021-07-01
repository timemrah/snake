import Snake from './modules/Snake.js';




//HTML:
const HTML = {};
HTML.btn = {};
HTML.btn.start = document.getElementById('start-button');
HTML.btn.stop = document.getElementById('stop-button');
//BOARD
HTML.board = {};
HTML.board.location = {};
HTML.board.speed = document.querySelector('.board .speed .value');
HTML.board.location.x = document.querySelector('.location .x');
HTML.board.location.y = document.querySelector('.location .y');
//HTML//


//DATA:
const locationMemory = [];
const gemMemory      = [];
let   gemLength      = 5;
let   direction      = 'x';
let   increase       = +1;
const map            = {width: 50, height: 30};
let   moveInterval   = null;
let   gemInterval    = null;
let   speed          = 100;
//DATA//


//CREATE SNAKE INSTANCE
const snake1 = new Snake(map.width, map.height);

HTML.board.speed.innerHTML = speed.toString();

//START:
HTML.btn.start.addEventListener('click', e => {

    //MOVE UPDATE:
    moveInterval = setInterval(()=>{

        locationMemory.push({x:snake1.location.x, y:snake1.location.y});

        //BEYAZLAT
        if(locationMemory.length > snake1.length){
            let clearLocation = locationMemory.shift();
            let $clearPoint = document.getElementById(`x${clearLocation.x}y${clearLocation.y}`);
            $clearPoint.style.backgroundColor = 'white';
        }

        //BİR SONRAKİ NOKTAYI ÖĞREN
        let $point = document.getElementById(`x${snake1.location.x}y${snake1.location.y}`);

        //BİR SONRAKİ NOKTADA GEM VARSA AL!
        if($point.style.backgroundColor === 'red'){
            snake1.length++;
        }

        //SİYAHLAT
        $point.style.backgroundColor = 'black';


        //BOARD
        HTML.board.location.x.innerHTML = snake1.location.x;
        HTML.board.location.y.innerHTML = snake1.location.y;

        //MOVE
        if(direction === 'x'){
            snake1.horizontalIncrease(increase);
        } else if(direction === 'y'){
            snake1.verticalIncrease(increase);
        }


    }, speed);
    //MOVE UPDATE//


    //GEM UPDATE:
    gemInterval = setInterval(()=>{

        let x = Math.floor(Math.random() * map.width);
        let y = Math.floor(Math.random() * map.height);

        gemMemory.push({x, y});

        if(gemMemory.length > gemLength){
            let clearGem = gemMemory.shift();
            let $clearGem = document.getElementById(`x${clearGem.x}y${clearGem.y}`);
            $clearGem.style.backgroundColor = 'white';
        }

        let $gemPoint = document.getElementById(`x${x}y${y}`);
        $gemPoint.style.backgroundColor = 'red';

    }, 5000);
    //GEM UPDATE//


});
//START//


//STOP:
HTML.btn.stop.addEventListener('click', e => {
    clearInterval(moveInterval);
    clearInterval(gemInterval);
});
//STOP//



//KEY DOWN:
document.onkeydown = function (event){

    switch(event.key){
        case "ArrowUp":
            if(direction === 'y'){ break; }
            direction = 'y';
            increase = -1;
            break;

        case "ArrowDown":
            if(direction === 'y'){ break; }
            direction = 'y';
            increase = 1;
            break;

        case "ArrowLeft":
            if(direction === 'x'){ break; }
            direction = 'x';
            increase = -1;
            break;

        case "ArrowRight":
            if(direction === 'x'){ break; }
            direction = 'x';
            increase = 1;
            break;
    }

}
//KEY DOWN//