import cards from '../cards';

export default class BaseModel {
  constructor() {
    this.cards = cards;
    this.items = cards.map((obj) => ({ name:obj.name, image: obj.img, type: obj.type, breed: obj.breed, description:obj.description, age:obj.age, inoculations:obj.inoculations, diseases:obj.diseases, parasites:obj.parasites}));
    this.isPopapOpen = false;
    this.isBurgerOpen = false; 
    this.itemCount = 3;
  }
}