import {By, Options, until} from "selenium-webdriver";
import { BasePage } from "./basePage";

export class Hudl extends BasePage{
    constructor() {
        super({url: "https://www.hudl.com"})
    }

    /* --- This preps each test and clears cookies between tests --- */
    async hudlSetupAndTeardown() {
        beforeEach(async ()=>{
            await this.navigate()
        });
        afterEach(async ()=>{
            await this.driver.manage().deleteAllCookies();
        });
        afterAll( async ()=>{
            await this.quit();
        });
    }


    /* --- Variables here ---*/

    // Login button at the top right hand corner of the home page 
    loginHomeButton: By = By.xpath("//a[@class='mainnav__btn mainnav__btn--primary']");

    // Login page form inputs
    loginFormEmail: By = By.xpath("//input[@id='email']")
    loginFormPassword: By = By.xpath("//input[@id='password']")
    loginFormSubmitButton: By = By.xpath("//button[@id='logIn']")

    // Logout button after dropdown
    logoutDropdownButton: By = By.xpath("//div[@class='hui-globaladditionalitems hui-globaladditionalitems--not-phone']//a[@class='hui-globalusermenu__item']")

    // Assertion variable to see if we are logged in
    loggedInCheckButton: By = By.xpath("//div[@class='hui-globaluseritem__display-name']")

    // Assertion variable to see if we are on the home page
    loginHomeButtonCheck: By = By.xpath("//a[@class='mainnav__btn mainnav__btn--primary']");

    // Assertion variable to see if an error occures when we log in with bad credentials
    invalidLogingError: By = By.xpath("//p[@class='uni-text']")

    
    
    /* --- Hudl Login Methods below --- */
    
    // Attempts to log in with credentials as variables
    async loginAttempt(email: string, password: string) {
       try {
           await (await this.getElement(this.loginHomeButton)).click()
           await (await this.getElement(this.loginFormEmail)).sendKeys(email)
           await (await this.getElement(this.loginFormPassword)).sendKeys(password)
           await (await this.getElement(this.loginFormSubmitButton)).click()  
        } catch (e) {
            throw(e)
        } 
    }

    // Attemps to logout after calling loginAttempt function
    async logoutAttempt(email: string, password: string){
        try {
            await this.loginAttempt(email, password);
            /* This would be a good place to set a timeout */
            await this.driver.sleep(500)
            await this.driver.findElement(this.loggedInCheckButton)
            await (await this.getElement(this.loggedInCheckButton)).click()
            await (await this.getElement(this.logoutDropdownButton)).click()
        } catch (e) {
            throw (e)
        }
    }
    
    
    /* --- Assertions below ---*/
    
    // Asserts that we are logged in
    async assertLoggedIn() {
        try {
            /* This would be a good place to set a timeout */
            await this.driver.sleep(1000)
            await this.driver.findElement(this.loggedInCheckButton)
            expect(this.driver.findElement(this.loggedInCheckButton).isDisplayed).not.toBeFalsy();
        } catch (e) {
            throw(e)
        }
    } 

    // Asserts that we are logged out
    async assertLoggedOut() {
        try {
            /* This would be a good place to set a timeout */
            await this.driver.sleep(1000)
            await this.driver.findElement(this.loginHomeButtonCheck)
            expect(this.driver.findElement(this.loginHomeButtonCheck).isDisplayed).not.toBeFalsy();
        } catch (e) {
            throw(e)
        }
    }
    // Asserts that our login attemt got a UI error
    async assertLoginFailed(){
        try {
            /* This would be a good place to set a timeout */
            await this.driver.sleep(1000)
            await this.driver.findElement(this.invalidLogingError)
            expect(this.driver.findElement(this.invalidLogingError).isDisplayed).not.toBeFalsy();
        } catch (e) {
            throw(e)
        }
    }


}