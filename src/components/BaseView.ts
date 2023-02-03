import IItem from '../templates/IItem';
import ICard from '../templates/ICard';
export default class BaseView {
    body:HTMLBodyElement;
    carousel:HTMLElement;
    wrappers:NodeListOf<HTMLDivElement>;
    closeBtn:HTMLDivElement;
    modal:HTMLDivElement;
    burger:HTMLSpanElement;
    popap:HTMLDivElement;

    BTN_LEFT:HTMLDivElement;
    BTN_RIGHT:HTMLDivElement;
    CAROUSEL:HTMLDivElement;
    ITEM_LEFT:HTMLDivElement;
    ITEM_RIGHT:HTMLDivElement;

    checkPopup:()=>boolean;
    checkBurgerOpen:()=>boolean;
    
    constructor() {
        this.body = document.querySelector('body') as HTMLBodyElement;
    }

    bindCheckPopup(callback:()=>boolean){
        this.checkPopup = callback;
    }

    bindClickCloseBtnListener(handler:()=>void){
        this.closeBtn.addEventListener('click', ()=>{
            this.modal.classList.toggle("showModal");
            handler();// isPopapOpen = !isPopapOpen;
            this.popap.classList.toggle("showPopup");
            this.body.style.overflow = "visible";
            this.closeBtn.style.display = "none";
        })
    }

    addAnimationEndListener = (handler:()=>void, cards:ICard[], items:IItem[]) => {
        
    }

    setItems = (items:IItem[]) => {  
        
    }

    bindClickOutsideListener(handler1:()=>void, handler2:()=>void){
        window.addEventListener('click', (e)=>{
           
            if(e.target == this.modal && !this.checkPopup()){ 
               
                this.modal.classList.toggle("showModal");
                this.body.classList.toggle("change");
                handler1(); // this.model.isBurgerOpen = !this.model.isBurgerOpen;
                this.body.style.overflow = "visible";
            }
            if(e.target == this.modal && this.checkPopup()){
                this.modal.classList.toggle("showModal");
                handler2(); // isPopapOpen = !isPopapOpen;
                this.popap.classList.toggle("showPopup");
                this.body.style.overflow = "visible";
                this.closeBtn.style.display = "none";
            }
        });
    }

    bindCheckBurgerOpen(callback:()=>boolean){
        this.checkBurgerOpen = callback;
    }

    bindOpenCloseBurger(handler:()=>void){
        this.burger.addEventListener('click', ()=>{
            this.body.classList.toggle("change");
            this.modal.classList.toggle("showModal");
            this.checkBurgerOpen()?this.body.style.overflow = "visible": this.body.style.overflow = "hidden";
            handler();  // isBurgerOpen = !isBurgerOpen;
        });
    }
  
    bindChangeBurger(handler:()=>void){
       window.addEventListener('hashchange', ()=>{ 
            if(this.checkBurgerOpen()){ 
                this.body.classList.toggle("change");
                this.modal.classList.toggle("showModal");
                this.body.style.overflow = "visible";
                handler(); // this.model.isBurgerOpen = !this.model.isBurgerOpen;
            }
        });
    }
}
