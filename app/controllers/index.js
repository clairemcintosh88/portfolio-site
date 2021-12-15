import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {

    @action findOutMoreClicked() {
        //Redirect to about page
        this.transitionToRoute('about');
    }
    @action seeMoreClicked() {
        //Redirect to about page
        this.transitionToRoute('work');
    }
}
