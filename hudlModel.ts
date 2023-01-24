import {By} from "selenium-webdriver";
import { BasePage } from "./basePage";

export class Hudl extends BasePage{
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

    // Login page form inputs
    loginFormEmail: By = By.xpath("//input[@id='email']")
    loginFormPassword: By = By.xpath("//input[@id='password']")
    loginFormSubmitButton: By = By.xpath("//button[@id='logIn']")

    // Assertion variable to see if we are logged in
    loggedInCheck: By = By.xpath("//div[@class='hui-globaluseritem__display-name']")
    
    
    
    async loginWithValidCreds(email: string, password: string) {
        await (await this.getElement(this.loginHomeButton)).click()
        await (await this.getElement(this.loginFormEmail)).sendKeys(email)
        await (await this.getElement(this.loginFormPassword)).sendKeys(password)
        await (await this.getElement(this.loginFormSubmitButton)).click()
        await this.sleep(1000)
    }
    
    // Assertions below
    
    // Asserts that we are logged in
    async assertLoggedInValid() {
        try {
            await this.driver.findElement(this.loggedInCheck)
        } catch (e) {
            console.log("Log in assertion error")
        } finally {
            expect(this.driver.findElement(this.loggedInCheck).isDisplayed).not.toBeFalsy();
        }
    } 
}