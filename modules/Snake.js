class Snake
{



    length    = 10;
    direction = 'x';
    increase  = +1;
    map       = { width : null, height: null }
    currentLocation = {x:0, y:0}
    locationMemory  = [];
    HTML = {};
    time   = 0;
    speed  = 100;
    gem    = null;




    constructor(map, HTML, gem){

        this.map.width  = map.width  - 1;
        this.map.height = map.height - 1;

        this.HTML = HTML;
        this.gem  = gem;

        this.reload();

        //KEYBOARD EVENT ASSIGMENT
        document.addEventListener('keydown', event => {
            this.#onKeyDown(event);
        });

        HTML.board.speed.innerHTML  = this.speed.toString();
        HTML.board.length.innerHTML = this.length.toString();

    }



    reload(){
        this.direction = 'x';
        this.length = 10;
        this.increase = +1;

        this.#startPosition(this.map);

        this.HTML.arena.box.forEach(box => {
            box.style.backgroundColor = 'white';
        });
    }




    update(time){

        if((time % this.speed) !== 0){
            return false;
        }

        //OYUN ZAMANI
        this.time = time;

        //ŞU ANDA KAFANIN MEVCUT KONUMU
        const $movePoint = this.#getPointDom(this.currentLocation.x, this.currentLocation.y);

        if(this.#gameOver($movePoint)){
            return false;
        }

        //GEM VARSA AL
        this.#isThereGemTakeIt($movePoint);

        //YILANIN KAFASININ YENİ KONUMUNU SİYAH, KUYRUKTAN AZALMASI GEREKENLERİ BEYAZ YAP
        this.#snakePoints($movePoint);

        //SKORBOARD'A KONUMU YAZ
        this.#locationScoreboard(this.currentLocation);

        //YILANIN KAFASININ KONUMUNU BİR İLERİ ALIYORUZ
        this.#increase();

    }




    #lengthIncrease(value){
        this.length += value;
        this.HTML.board.length.innerHTML = this.length.toString();
    }




    #locationScoreboard(location){
        document.querySelector('.location .x').innerHTML = location.x;
        document.querySelector('.location .y').innerHTML = location.y;
    }




    #gameOver($movePoint){
        if($movePoint.style.backgroundColor === 'black'){
            this.HTML.btn.reload.click();
            return true;
        }
    }




    #startPosition(){

        this.currentLocation.x = Math.floor(this.map.width / 2);
        this.currentLocation.y = Math.floor(this.map.height / 2);
    }




    #snakePoints($movePoint){
        //YILANA AİT NOKTALARIN KAYITLARI
        this.locationMemory.push({x:this.currentLocation.x, y:this.currentLocation.y});

        //YILANIN BOYUNA GÖRE KAYITLI NOKTALARI SİLİYORUZ. BU NOKTALAR SANKİ BİR YILANMIŞ GİBİ
        //DAVRANMASINI SAĞLIYOR
        if(this.locationMemory.length > this.length){
            this.#clearEndOfSnake();
        }

        //KAFANIN MEVCUT KONUMUNU SİYAH YAP
        $movePoint.style.backgroundColor = 'black';
    }




    #isThereGemTakeIt($point){
        if($point.dataset.value){
            let value = parseInt($point.dataset.value);
            this.#lengthIncrease(value);

            this.gem.clearGem(this.currentLocation);
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
            this.#horizontalPositionIncrease();
        } else if(this.direction === 'y'){
            this.#verticalPositionIncrease();
        }
    }




    #getPointDom(x,y){
        return document.getElementById(`x${x}y${y}`);
    }




    #verticalPositionIncrease(){
        //HARİTANIN DIŞINA ÇIKMAMASI İÇİN SONSUZ BİR ŞEKİLDE HARİTA İÇİNDE DÖNMESİ İÇİN
        if(this.increase > 0){
            //YILANIN GİTTİĞİ YÖN AŞAĞI İSE
            if(this.currentLocation.y >= this.map.height){
                //HARİTANIN SONUNDAYSA EN BAŞINA AL
                this.currentLocation.y = 0;
                return;
            }
        } else{
            //YILANIN GİTTİĞİ YÖN YUKARI İSE
            if(this.currentLocation.y <= 0){
                //HARİTANIN BAŞINDAYSA EN SONUNA AL
                this.currentLocation.y = this.map.height;
                return;
            }
        }

        //HARİTA DIŞINDA DEĞİLSE DEĞERİ ARTTIR
        this.currentLocation.y += this.increase;
    }
    #horizontalPositionIncrease(value){
        //HARİTANIN DIŞINA ÇIKMAMASI İÇİN SONSUZ BİR ŞEKİLDE HARİTA İÇİNDE DÖNMESİ İÇİN
        if(this.increase > 0){
            //YILANIN GİTTİĞİ YÖN POZİTİF İSE (SAĞ)
            if(this.currentLocation.x >= this.map.width){
                //HARİTANIN SONUNDAYSA EN BAŞINA AL
                this.currentLocation.x = 0;
                return;
            }
        } else{
            //YILANIN GİTTİĞİ YÖN NEGATİF İSE (SOL)
            if(this.currentLocation.x <= 0){
                //HARİTANIN BAŞINDAYSA EN SONUNA AL
                this.currentLocation.x = this.map.width;
                return;
            }
        }

        //HARİTA DIŞINDA DEĞİLSE DEĞERİ ARTTIR
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