import BaseController from "./Basecontroller";

export default class MainPageController extends BaseController{
    constructor(model, view) {
      super(model, view);

      this.model.checkWindowSize();
      this.view.bindFillWrapper(this.fillWrapper);
      this.view.setWrappers(this.model.items);
      this.view.bindSetPopap(this.handleChangePopup, this.model.cards);

      this.view.addAnimationEndListener(this.handleChangePopup, this.model.cards, this.model.items);
      
    }

    handleChangePopup = () => {
      this.model.isPopapOpen = !this.model.isPopapOpen;
    }
    

}