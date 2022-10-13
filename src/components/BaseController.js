export default class BaseController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      this.view.bindChangeBurger(this.handleChangeBurger);
      this.view.bindOpenCloseBurger(this.handleChangeBurger);
      this.view.bindCheckBurgerOpen(this.handleCheckBurger);

      this.view.bindCheckPopup(this.handleCheckPopup);
      
      this.view.bindClickOutsideListener(this.handleChangeBurger, this.handleChangePopup);
      this.view.bindClickCloseBtnListener(this.handleChangePopup);

    }
    
      handleChangePopup = () => {
        this.model.isPopapOpen = !this.model.isPopapOpen;
      }
  
      handleCheckBurger = () => {
        return this.model.isBurgerOpen;
      }
  
      handleCheckPopup = () => {
        return this.model.isPopapOpen;
      }
  
      fillWrapper = () => {
        return this.model.fillWrapper(); 
      }
  
      handleChangeBurger = () => {
        this.model.isBurgerOpen = !this.model.isBurgerOpen;
      }

}
  