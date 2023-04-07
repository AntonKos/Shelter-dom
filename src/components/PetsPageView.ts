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

    constructor() {
        super();
        this.body.innerHTML = PagePets();
        this.carousel = document.querySelector('.paginate') as HTMLDivElement; 
        this.wrappers = document.querySelectorAll<HTMLDivElement>('.item');
        this.closeBtn = document.querySelector('.icon-close')as HTMLDivElement; 
        this.modal  = document.querySelector('.shadow-wrapper')as HTMLDivElement; 
        this.burger = document.querySelector('.hamburger')as HTMLSpanElement;
        this.popap = document.querySelector('.popup') as HTMLDivElement;
        this.addShowBodyListener();
    }


    setItems = (items:IItem[]) => {  
        this.carousel.innerHTML = items.map((item) => ItemPets({...item})).join('');
    }

    bindSetPopap(handler:()=>void, cards:ICard[]) {
     
      const itemsCarousel = document.querySelectorAll('.paginate__item');
      
      itemsCarousel.forEach(element => {
        element.addEventListener('click', (event) =>{ 
        const target = event.currentTarget as HTMLElement;
          if (target.classList.contains('paginate__item')) {
            this.modal.classList.toggle("showModal");
            handler(); // isPopapOpen = !isPopapOpen;
            const object = cards.find(card => card.name === target.dataset.name) as ICard; 
            this.popap = document.querySelector('.popup') as HTMLDivElement;
            this.popap.innerHTML = Popup(object);
            this.popap.classList.toggle("showPopup");
            this.body.style.overflow = "hidden";
            this.closeBtn.style.display = "flex";
            }
          })
        }); 
    }

    bindNextPageHandler(handler:any, handler2:any){
      const nextBtn = document.querySelector('#next') as HTMLDivElement;
      nextBtn.addEventListener('click', ()=>{
        const arrayOfModelValues = handler();
        if(arrayOfModelValues){
        const [curPage, filteredItems, items, countCardsOnPage] = arrayOfModelValues;
        const pageNumber = document.querySelector('#page') as HTMLDivElement;
        const prevBtn = document.querySelector('#prev') as HTMLDivElement;
        const nextBtn = document.querySelector('#next') as HTMLDivElement;
        const startBtn = document.querySelector('#start') as HTMLDivElement;
        const endBtn = document.querySelector('#end') as HTMLDivElement;

        pageNumber.innerHTML = curPage;
        this.setItems(filteredItems);
        // setPopup();
        if (curPage == 1) {
          prevBtn.classList.add('blocked');
          startBtn.classList.add('blocked');
          } else {
            prevBtn.classList.remove('blocked');
            startBtn.classList.remove('blocked');
          }
          if (curPage == handler2() && items.length > countCardsOnPage) { //handler2()?
            nextBtn.classList.add('blocked');
            endBtn.classList.add('blocked');
          } else {
            nextBtn.classList.remove('blocked');
            endBtn.classList.remove('blocked');
          }
      }                 
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