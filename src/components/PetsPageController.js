import BaseController from "./Basecontroller";

export default class PetsPageController extends BaseController {
    constructor(model, view) {
        super(model, view);
        this.view.setItems(this.model.items);
        this.view.bindSetPopap(this.handleChangePopup, this.model.cards);
    }
    

}