import cards from '../cards';
import ICard from '../templates/ICard';
import IItem from '../templates/IItem';
export default class BaseModel {

  cards:ICard[];
  items:IItem[];
  isPopapOpen:boolean;
  isBurgerOpen:boolean;
  itemCount:number;
  lastArray:number[];

  constructor() {
    this.cards = cards;
    this.items = cards.map((obj) => ({ name:obj.name, img: obj.img, type: obj.type, breed: obj.breed, description:obj.description, age:obj.age, inoculations:obj.inoculations, diseases:obj.diseases, parasites:obj.parasites}));
    this.isPopapOpen = false;
    this.isBurgerOpen = false; 
    this.itemCount = 3;
    this.lastArray = [];
  }

  fillWrapper(){ 

    let index = 0; 
    const array:number[] = [];

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
  
  
}