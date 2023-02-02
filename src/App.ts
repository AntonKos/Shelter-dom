import PetsPageModel from './components/PetsPageModel';
import PetsPageView from './components/PetsPageView';
import PetsPageController from './components/PetsPageController';
import MainPageModel from './components/MainPageModel';
import MainPageView from './components/MainPageView';
import MainPageController from './components/MainPageController';
import IModel from './templates/IModel';
import IView from './templates/IView';
import IController from './templates/IController';

export default class App {

    model:IModel;
    view:IView;
    controller:IController;

    init() {
        window.addEventListener('hashchange', this.navigate);
        this.navigate(); 
    }

    navigate = ():void => {
        const path = window.location.hash.slice(1).split('/');
        switch (path[0]) {
            case 'pets':
                this.model = new PetsPageModel();
                this.view = new PetsPageView();
                this.controller = new PetsPageController(this.model, this.view);
                break;
            default:
                this.model = new MainPageModel();
                this.view = new MainPageView();
                this.controller = new MainPageController(this.model, this.view);  
                break;
                
        }
}

}