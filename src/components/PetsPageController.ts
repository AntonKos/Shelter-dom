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
        this.view.bindNextPageHandler(this.onNextPage, this.model.numPages);
        this.view.bindPreviousPageHandler(this.onPreviousPage, this.model.numPages)
    }

    onNextPage = () => {
        return this.model.checkLastPage();
    }

    onPreviousPage = () => {
        return this.model.checkFirstPage();
    }
    
    
}