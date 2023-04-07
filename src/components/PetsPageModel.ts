import BaseModel from "./BaseModel";

export default class PetsPageModel extends BaseModel {
    pageSize:number;
    curPage:number;
    countCardsOnPage:number;
    objects:any;
    filteredItems:any;
    constructor() {
      super();
      this.objects = []; 
      this.pageSize = 6;
      this.curPage = 1;
      this.countCardsOnPage = 8;
      this.checkWindowSize(); 
      this.setObjects();
      this.items = this.objects.map((obj:any, index:any) => ({ name:obj.name, image: obj.img, type: obj.type, breed: obj.breed, description:obj.description, age:obj.age, inoculations:obj.inoculations, diseases:obj.diseases, parasites:obj.parasites})); 
      this.filteredItems = this.filterItems();
    }

    checkLastPage(){
        if ((this.curPage * this.countCardsOnPage) < this.filteredItems.length){
            this.curPage++;
            this.filteredItems = this.filterItems();
            return [this.curPage, this.filteredItems, this.items, this.countCardsOnPage];
        } 
    }

    filterItems() {
        const filteredItems = this.items.filter(((row,index)=>{
          let start = (this.curPage - 1) * this.countCardsOnPage;
          let end = this.curPage * this.countCardsOnPage;
          if (index >= start && index < end) return true;
        }));
        return filteredItems;
      }

    checkWindowSize () {
        const width = document.body.clientWidth;
        if(width === 1280){
          this.pageSize = 6;
          this.countCardsOnPage = 8;
        }else if(width === 768){
          this.pageSize = 8;
          this.countCardsOnPage = 6;
        }else if (width === 320){
          this.pageSize = 16;
          this.countCardsOnPage = 3;
        }
    }

    setObjects(){
        let i = 0;
        while (i < this.pageSize) { // pageSize = 6,8,16 - страниц
          const array:any = [];
          for (let index = 0; index < this.countCardsOnPage; index++) {  //countCardsOnPage = 8,6,3
            let element;
              do {
                element = this.cards[Math.floor(Math.random() * 8)];
              } while (array.includes(element));
              
              array.push(element);
          };
          array.sort(() => Math.random() - 0.5);
          this.objects.push(...array);
          i++;
        };
    }

    numPages() {
        return Math.ceil(this.items.length / this.countCardsOnPage);
    }



}