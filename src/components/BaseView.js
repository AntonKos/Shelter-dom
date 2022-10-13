
export default class BaseView {
    constructor() {
        this.body = document.querySelector('body');
    }

    bindCheckPopup(callback){
        this.checkPopup = callback;
    }

    bindClickCloseBtnListener(handler){
        this.closeBtn.addEventListener('click', ()=>{
            this.modal.classList.toggle("showModal");
            handler();// isPopapOpen = !isPopapOpen;
            this.popap.classList.toggle("showPopup");
            this.body.style.overflow = "visible";
            this.closeBtn.style.display = "none";
        })
    }

    bindClickOutsideListener(handler1, handler2){
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

    bindCheckBurgerOpen(callback){
        this.checkBurgerOpen = callback;
    }

    bindOpenCloseBurger(handler){
        this.burger.addEventListener('click', ()=>{
            this.body.classList.toggle("change");
            this.modal.classList.toggle("showModal");
            this.checkBurgerOpen()?this.body.style.overflow = "visible": this.body.style.overflow = "hidden";
            handler();  // isBurgerOpen = !isBurgerOpen;
        });
    }
  
    bindChangeBurger(handler){
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
