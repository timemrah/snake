class Gem
{



    HTML = {};
    map  = {x:null, y:null}
    locationMemory  = [];
    length = 5;
    time   = 0;
    speed  = 5000;




    constructor(map, HTML){
        this.map  = map;
        this.HTML = HTML;
    }




    update(time){

        if((time % this.speed) !== 0){
            return false;
        }

        //OYUN ZAMANI
        this.time = time;

        const newGemLocation = this.#randomCoordinate();
        this.locationMemory.push(newGemLocation);

        if(this.locationMemory.length > this.length){
            this.#clearFirstOneGem();
        }

        this.#createGem(newGemLocation);

    }




    #randomCoordinate(){
        let x = Math.floor(Math.random() * this.map.width);
        let y = Math.floor(Math.random() * this.map.height);
        return {x,y};
    }




    #clearFirstOneGem(){
        let clearGem = this.locationMemory.shift();
        let $clearGem = document.getElementById(`x${clearGem.x}y${clearGem.y}`);
        $clearGem.style.backgroundColor = 'white';
        $clearGem.removeAttribute('data-value');
    }




    #createGem(location){
        let $gemPoint = document.getElementById(`x${location.x}y${location.y}`);
        $gemPoint.style.backgroundColor = 'red';
        $gemPoint.dataset.value = this.#random(1, this.length);
    }




    #random(min, max){
        return min + Math.floor(Math.random() * (max - 1));
    }



    clearGem(findLocation){
        for(let i in this.locationMemory){
            let gemLocation = this.locationMemory[i];
            if(findLocation === gemLocation){
                this.locationMemory.splice(i, 1);
                break;
            }
        }
    }

}




export default Gem;