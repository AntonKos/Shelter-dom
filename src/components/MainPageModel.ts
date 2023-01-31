import cards from '../cards';
import BaseModel from './BaseModel';

export default class MainPageModel extends BaseModel {
    constructor() {
      super();
      this.lastArray = [];
      this.checkWindowSize();
    }

    
   checkWindowSize(){  
    if(window.innerWidth === 320){
        this.itemCount = 1;
    }
    if(window.innerWidth === 768){
        this.itemCount = 2;
    }
    if(window.innerWidth === 1280){
        this.itemCount = 3;
    }
    }

    fillWrapper(){ 

        let index = 0; 
        const array = [];

        for(let i=0; i < this.itemCount; i++){

            do {
                index = Math.floor(Math.random() * 8);
            }
            while (array.includes(index) || this.lastArray.includes(index));
            array.push(index);

        };

        this.lastArray = array.slice();
      
        return array;
        
    }
}