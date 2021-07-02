class Snake
{



    length    = 10;
    direction = 'x';
    increase  = 1;
    map       = { width : null, height: null }
    currentLocation = {x:0, y:0}
    locationMemory  = [];




    constructor(mapWidth, mapHeight){

        this.map.width  = mapWidth - 1;
        this.map.height = mapHeight - 1;

        this.currentLocation.x = Math.floor(this.map.width / 2);
        this.currentLocation.y = Math.floor(this.map.height / 2);

        //EVENT ASSIGMENT
        document.addEventListener('keydown', event => {
            this.#onKeyDown(event);
        });

    }




    update(){

        this.locationMemory.push({x:this.currentLocation.x, y:this.currentLocation.y});

        //YILANIN BOYUNA GÖRE SONDAN SİLME İŞLEMİ. BU YILAN VARMIŞ GİBİ GÖSTERİYOR.
        if(this.locationMemory.length > this.length){
            this.#clearEndOfSnake();
        }

        //KAFANIN MEVCUT KONUMU
        const $movePoint = this.#getPointDom(this.currentLocation.x, this.currentLocation.y);

        //GEM VARSA AL
        this.#isThereGemTakeIt($movePoint);

        //KAFANIN MEVCUT KONUMUNU SİYAH YAP
        $movePoint.style.backgroundColor = 'black';

        //YILANIN KAFASININ KONUMUNU DEĞİŞTİRME
        this.#increase();

    }



    #isThereGemTakeIt($point){
        if($point.dataset.value){
            let value = parseInt($point.dataset.value);
            this.length += value;
            console.log('YILANIN BOYU '+value+' BIRIM UZADI');
        }
    }



    #clearEndOfSnake(){
        let clearLocation = this.locationMemory.shift();
        let $clearPoint = this.#getPointDom(clearLocation.x, clearLocation.y);
        $clearPoint.style.backgroundColor = 'white';
        return $clearPoint;
    }




    #increase(){
        if(this.direction === 'x'){
            this.#horizontalIncrease();
        } else if(this.direction === 'y'){
            this.#verticalIncrease();
        }
    }




    #getPointDom(x,y){
        return document.getElementById(`x${x}y${y}`);
    }




    #verticalIncrease(){
        if(this.increase > 0){
            if(this.currentLocation.y >= this.map.height){
                this.currentLocation.y = 0;
                return;
            }
        } else{
            if(this.currentLocation.y <= 0){
                this.currentLocation.y = this.map.height;
                return;
            }
        }

        this.currentLocation.y += this.increase;
    }
    #horizontalIncrease(value){

        if(this.increase > 0){
            if(this.currentLocation.x >= this.map.width){
                this.currentLocation.x = 0;
                return;
            }
        } else{
            if(this.currentLocation.x <= 0){
                this.currentLocation.x = this.map.width;
                return;
            }
        }

        this.currentLocation.x += this.increase;
    }




    #onKeyDown(event){
        switch(event.key){
            case "ArrowUp":
                if(this.direction === 'y'){ break; }
                this.direction = 'y';
                this.increase = -1;
                break;

            case "ArrowDown":
                if(this.direction === 'y'){ break; }
                this.direction = 'y';
                this.increase = 1;
                break;

            case "ArrowLeft":
                if(this.direction === 'x'){ break; }
                this.direction = 'x';
                this.increase = -1;
                break;

            case "ArrowRight":
                if(this.direction === 'x'){ break; }
                this.direction = 'x';
                this.increase = 1;
                break;
        }
    }




}




export default Snake;