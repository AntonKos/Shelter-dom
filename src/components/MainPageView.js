import PageMain from '../templates/PageMain';
import MainWrapper from '../templates/MainWrapper';
import  Container  from '../templates/Container';
import  ItemMain  from '../templates/ItemMain';
import Popup from '../templates/Popup';
import BaseView from './BaseView';

export default class MainPageView extends BaseView {
    constructor() {
        super();
        this.body.innerHTML = PageMain();
        this.carousel = document.querySelector('.carousel');

        carousel.innerHTML = Container();

        this.wrappers = document.querySelectorAll('.item');
        this.closeBtn = document.querySelector('.icon-close'); 
        this.modal  = document.querySelector('.shadow-wrapper'); 
        this.burger = document.querySelector('.hamburger');
        this.popap = document.querySelector('.popup');
    
        this.BTN_LEFT = document.querySelector('#prev'); 
        this.BTN_RIGHT = document.querySelector('#next');
        this.CAROUSEL = document.querySelector('#item-container');
        this.ITEM_LEFT = document.querySelector("#item-left");
        this.ITEM_RIGHT = document.querySelector("#item-right");

        this.addBtnListener();
        this.addShowBodyListener();
    }

    bindSetPopap(handler, cards) {
     
      const itemsCarousel = document.querySelectorAll('.carousel__item');
     
      itemsCarousel.forEach(element => {
        element.addEventListener('click', (event) =>{ 
          if (event.currentTarget.classList.contains('carousel__item')) {
            this.modal.classList.toggle("showModal");
            handler(); // isPopapOpen = !isPopapOpen;
            const object = cards.find(card => card.name === event.currentTarget.dataset.name); 
            this.popap = document.querySelector('.popup');
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

    addAnimationEndListener = (handler,cards,items) => {
        this.CAROUSEL.addEventListener('animationend',(animationEvent)=>{
            let changedItem;
            let opositeItem;
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

    bindFillWrapper(callback){
        this.fillWrapper = callback;
    }

    setWrappers(items){
        this.wrappers.forEach(element => {
            element.innerHTML = ''; 
           
            const arrayOfIndexes = this.fillWrapper(); 
            arrayOfIndexes.forEach(index => {
                element.innerHTML += ItemMain(items[index]);
            })
        });      
    }
}