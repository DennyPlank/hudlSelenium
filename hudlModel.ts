import {By} from "selenium-webdriver";
import { BasePage } from "./basePage";


export class Hudl extends BasePage{
    searchBar: By = By.name('q');
    reseults: By = By.id('rso');

    constructor() {
        super({url: "https://www.hudl.com"})
    }
    
    async search(searchTerm: string) {
        return (this.setInput(this.searchBar, `${searchTerm}\n`))
    }
}