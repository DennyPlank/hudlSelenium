import {By} from "selenium-webdriver";
import { BasePage } from "./basePage";


export class Hudl extends BasePage{
    searchBar: By = By.name('q');
    reseults: By = By.id('rso');

    constructor() {
        super({url: "https://www.hudl.com"})
    }

    // This navigates to the model's URL for each test and then closes the browser at the end of the test suite. 
    async hudlSetupAndTeardown() {
        beforeEach(async ()=>{
            await this.navigate();
        });
        afterAll( async ()=>{
            await this.quit();
        });
    }

    // ------- Variables here -------

    // Login button at the top right hand corner of the home page 
    loginHomeButton: By = By.xpath("//a[@class='mainnav__btn mainnav__btn--primary']");
    

    
    async loginWithValidCreds(username: string, password: string) {
        await (await this.getElement(this.loginHomeButton)).click()
        await this.sleep(5000);
    }
}