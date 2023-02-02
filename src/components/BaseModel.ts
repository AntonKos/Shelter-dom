import cards from '../cards';
import ICard from '../templates/ICard';
import IItem from '../templates/IItem';
export default class BaseModel {

  cards:ICard[];
  items:IItem[];
  isPopapOpen:boolean;
  isBurgerOpen:boolean;
  itemCount:number;

  constructor() {
    this.cards = cards;
    this.items = cards.map((obj) => ({ name:obj.name, image: obj.img, type: obj.type, breed: obj.breed, description:obj.description, age:obj.age, inoculations:obj.inoculations, diseases:obj.diseases, parasites:obj.parasites}));
    this.isPopapOpen = false;
    this.isBurgerOpen = false; 
    this.itemCount = 3;
  }
  
  
}