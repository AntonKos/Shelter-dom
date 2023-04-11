import PagePets from '../templates/PagePets';
import  ItemPets  from '../templates/ItemPets';
import Popup from '../templates/Popup';
import ItemMain from '../templates/ItemMain';
import BaseView from './BaseView';
import IItem from '../templates/IItem';
import ICard from '../templates/ICard';

export default class PetsPageView extends BaseView{

    fillWrapper:()=>number[];
    checkLastPage:any;
    pageNumber:any;
    prevBtn:any;
    nextBtn:any;
    startBtn:any;
    endBtn:any;
    changePopup:any;

    constructor() {
        super();
        this.body.innerHTML = PagePets();
        this.carousel = document.querySelector('.paginate') as HTMLDivElement; 
        this.wrappers = document.querySelectorAll<HTMLDivElement>('.item');
        this.closeBtn = document.querySelector('.icon-close')as HTMLDivElement; 
        this.modal  = document.querySelector('.shadow-wrapper')as HTMLDivElement; 
        this.burger = document.querySelector('.hamburger')as HTMLSpanElement;
        this.popap = document.querySelector('.popup') as HTMLDivElement;

        this.pageNumber = document.querySelector('#page') as HTMLDivElement;
        this.prevBtn = document.querySelector('#prev') as HTMLDivElement;
        this.nextBtn = document.querySelector('#next') as HTMLDivElement;
        this.startBtn = document.querySelector('#start') as HTMLDivElement;
        this.endBtn = document.querySelector('#end') as HTMLDivElement;
        this.addShowBodyListener();
    }

    setPopup(filteredItems:any){
      const itemsCarousel = document.querySelectorAll('.paginate__item');
      itemsCarousel.forEach(element => {
        element.addEventListener('click', (event) =>{ 
        const target = event.currentTarget as HTMLElement;
          if (target.classList.contains('paginate__item')) {
            this.modal.classList.toggle("showModal");
            this.changePopup(); 
            const object = filteredItems.find((card: { name: string | undefined; }) => card.name === target.dataset.name); 
            this.popap = document.querySelector('.popup') as HTMLDivElement;
            this.popap.innerHTML = Popup(object);
            this.popap.classList.toggle("showPopup");
            this.body.style.overflow = "hidden";
            this.closeBtn.style.display = "flex";
          }
        })
      }); 
    }

    setStylesOfArrows(curPage:any, callback:any){
      if (curPage == 1) {
        this.prevBtn.classList.add('blocked');
        this.startBtn.classList.add('blocked');
        } else {
          this.prevBtn.classList.remove('blocked');
          this.startBtn.classList.remove('blocked');
        }
        if (curPage == callback()) {
          this.nextBtn.classList.add('blocked');
          this.endBtn.classList.add('blocked');
        } else {
          this.nextBtn.classList.remove('blocked');
          this.endBtn.classList.remove('blocked');
        }
    }

    setPaginationPage(handler:any, handler2:any){
      const arrayOfModelValues = handler();
      if(arrayOfModelValues){
      const [curPage, filteredItems] = arrayOfModelValues;

      this.pageNumber.innerHTML = curPage;
      this.setItems(filteredItems);
      this.setPopup(filteredItems);
      this.setStylesOfArrows(curPage, handler2);
    } 
    }

    setItems = (items:IItem[]) => {  
        this.carousel.innerHTML = items.map((item) => ItemPets({...item})).join('');
    }

    bindChangePopup(callback:any){
      this.changePopup = callback;
    }

    bindSetPopap(handler:()=>void, filteredItems:ICard[]) {
      this.setPopup(filteredItems);
    }

    bindFirstPageHandler(handler:any, handler2:any){
      this.startBtn.addEventListener('click', ()=>{
        this.setPaginationPage(handler, handler2);           
      }, false);
    }

    bindNextPageHandler(handler:any, handler2:any){
      this.nextBtn.addEventListener('click', ()=>{
        this.setPaginationPage(handler, handler2);                 
      }, false);
    }

    bindPreviousPageHandler(handler:any, handler2:any){
      this.prevBtn.addEventListener('click', ()=>{
        this.setPaginationPage(handler, handler2);                  
      }, false);
    }

    bindLastPageHandler(handler:any, handler2:any){
      this.endBtn.addEventListener('click', ()=>{
        this.setPaginationPage(handler, handler2);                  
      }, false);
    }

    addShowBodyListener(){
      window.onload = () =>{
        setTimeout(()=>{
          this.body.classList.add('display');
        }, 1000);
      };
    }

    bindFillWrapper(callback:()=>number[]){
      this.fillWrapper = callback;
    }
    
    setWrappers(items:IItem[]){
      this.wrappers.forEach(element => {
        element.innerHTML = ''; 
           
        const arrayOfIndexes = this.fillWrapper(); 
        arrayOfIndexes.forEach(index => {
          element.innerHTML += ItemMain(items[index]);
        })
      });      
    }
}