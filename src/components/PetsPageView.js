import PagePets from '../templates/PagePets';
import  ItemPets  from '../templates/ItemPets';
import Popup from '../templates/Popup';
import BaseView from './BaseView';

export default class PetsPageView extends BaseView{
    constructor() {
        super();
        this.body.innerHTML = PagePets();
        this.carousel = document.querySelector('.paginate'); 
        this.wrappers = document.querySelectorAll('.item');
        this.closeBtn = document.querySelector('.icon-close'); 
        this.modal  = document.querySelector('.shadow-wrapper'); 
        this.burger = document.querySelector('.hamburger');
        this.popap = document.querySelector('.popup');
    
        this.addShowBodyListener();
    }


    setItems = (items) => {  
        this.carousel.innerHTML = items.map((item) => ItemPets({...item})).join('');
    }

    bindSetPopap(handler, cards) {
     
      const itemsCarousel = document.querySelectorAll('.paginate__item');
      
      itemsCarousel.forEach(element => {
        element.addEventListener('click', (event) =>{ 
          if (event.currentTarget.classList.contains('paginate__item')) {
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

    bindFillWrapper(callback){
        this.fillWrapper = callback;
    }

}