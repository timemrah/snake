class Snake
{
    location = {x:0, y:0}
    length   = 10;
    map      = {
        width : null,
        height: null
    }

    constructor(mapWidth, mapHeight){
        this.map.width  = mapWidth - 1;
        this.map.height = mapHeight - 1;
    }


    Update(){



    }


    verticalIncrease(value){
        if(value > 0){
            if(this.location.y >= this.map.height){
                this.location.y = 0;
                return;
            }
        } else{
            if(this.location.y <= 0){
                this.location.y = this.map.height;
                return;
            }
        }

        this.location.y += value;
    }
    horizontalIncrease(value){

        if(value > 0){
            if(this.location.x >= this.map.width){
                this.location.x = 0;
                return;
            }
        } else{
            if(this.location.x <= 0){
                this.location.x = this.map.width;
                return;
            }
        }

        this.location.x += value;
    }

}


export default Snake;