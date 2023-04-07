import IModel from "../templates/IModel";
import IView from "../templates/IView";
import BaseController from "./Basecontroller";

export default class PetsPageController extends BaseController {
    model: IModel;
    view:IView;

    constructor(model:IModel, view:IView) {
        super(model, view);
        this.view.setItems(this.model.filteredItems);
        this.view.bindSetPopap(this.handleChangePopup, this.model.cards);
    }
    

}