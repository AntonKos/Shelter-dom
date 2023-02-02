import PageMain from '../templates/PageMain';
import MainWrapper from '../templates/MainWrapper';
import  Container  from '../templates/Container';
import  ItemMain  from '../templates/ItemMain';
import Popup from '../templates/Popup';
import BaseView from './BaseView';
import IItem from '../templates/IItem';
import ICard from '../templates/ICard';

export default class MainPageView extends BaseView {
    fillWrapper:()=>number[];
    constructor() {
        super();
        this.body.innerHTML = PageMain();
        this.carousel = document.querySelector('.carousel') as HTMLElement;

        this.carousel.innerHTML = Container();

        this.wrappers = document.querySelectorAll<HTMLDivElement>('.item');
        this.closeBtn = document.querySelector('.icon-close') as HTMLDivElement; 
        this.modal  = document.querySelector('.shadow-wrapper') as HTMLDivElement; 
        this.burger = document.querySelector('.hamburger') as HTMLSpanElement;
        this.popap = document.querySelector('.popup') as HTMLDivElement;
    
        this.BTN_LEFT = document.querySelector('#prev') as HTMLDivElement; 
        this.BTN_RIGHT = document.querySelector('#next') as HTMLDivElement;
        this.CAROUSEL = document.querySelector('#item-container') as HTMLDivElement;
        this.ITEM_LEFT = document.querySelector("#item-left") as HTMLDivElement;
        this.ITEM_RIGHT = document.querySelector("#item-right") as HTMLDivElement;

        this.addBtnListener();
        this.addShowBodyListener();
    }

    bindSetPopap(handler:()=>void, cards:ICard[]) {
     
      const itemsCarousel = document.querySelectorAll('.carousel__item');
     
      itemsCarousel.forEach((element) => {
        element.addEventListener('click', (event) =>{ 
          if (event.currentTarget.classList.contains('carousel__item')) {
            this.modal.classList.toggle("showModal");
            handler(); // isPopapOpen = !isPopapOpen;
            const object = cards.find((card:ICard) => card.name === event.currentTarget.dataset.name); 
            this.popap = document.querySelector('.popup') as HTMLDivElement;
            this.popap.innerHTML = Popup(object);
            this.popap.classList.toggle("showPopup");
            this.body.style.overflow = "hidden";
            this.closeBtn.style.display = "flex";
            }
          })
        }); 
    }

    addShowBodyListener(){
        window.onload = () =>{
            setTimeout(()=>{
                this.body.classList.add('display');
            }, 1000);
        };
    }


    addBtnListener = () => {
        this.BTN_LEFT.addEventListener('click', this.moveLeft);
        this.BTN_RIGHT.addEventListener('click', this.moveRight);
    }

    addAnimationEndListener = (handler:()=>void, cards:ICard, items:IItem[]) => {
        this.CAROUSEL.addEventListener('animationend',(animationEvent)=>{
            let changedItem:HTMLDivElement;
            let opositeItem:HTMLDivElement;
            if (animationEvent.animationName === "move-left") {
                this.CAROUSEL.classList.remove('transition-left');
                changedItem = this.ITEM_LEFT;
                opositeItem = this.ITEM_RIGHT;
                document.querySelector("#item-active").innerHTML = this.ITEM_LEFT.innerHTML;
            }else{
                this.CAROUSEL.classList.remove('transition-right');
                changedItem = this.ITEM_RIGHT;
                opositeItem = this.ITEM_LEFT;
                document.querySelector("#item-active").innerHTML = this.ITEM_RIGHT.innerHTML;
            }
        
            changedItem.innerHTML = "";
            const arrayOfIndexes = this.fillWrapper();
            arrayOfIndexes.forEach(index => {
                changedItem.innerHTML += ItemMain(items[index]);
            })
             
            opositeItem.innerHTML = changedItem.innerHTML;
            
            this.BTN_LEFT.addEventListener('click', this.moveLeft);
            this.BTN_RIGHT.addEventListener('click', this.moveRight);
            this.bindSetPopap(handler, cards);
        });
        
    }

    moveLeft = () =>{
        this.CAROUSEL.classList.add('transition-left');
        this.BTN_LEFT.removeEventListener('click', this.moveLeft);
        this.BTN_RIGHT.removeEventListener("click", this.moveRight);
    };
    
    moveRight = () =>{
        this.CAROUSEL.classList.add('transition-right');
        this.BTN_LEFT.removeEventListener('click', this.moveLeft);
        this.BTN_RIGHT.removeEventListener("click", this.moveRight);
    };

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