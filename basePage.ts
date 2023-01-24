import {Builder, By, Capabilities, Locator, until, WebDriver, WebElement} from 'selenium-webdriver';
const chromedriver = require('chromedriver');

interface Options {
    driver?: WebDriver;
    url?: string;
}

export class BasePage {
    driver: WebDriver
    url: string

    constructor(options?: Options){
        if(options && options.driver) this.driver = options.driver
        else this.driver = new Builder().withCapabilities(Capabilities.chrome()).build();
        if(options && options.url) this.url = options.url
    }
    
    async navigate(url?: string): Promise<void> {
        if (url) return await this.driver.get(url);
        else if (this.url) return await this.driver.get(this.url);
        else return Promise.reject('You need to provide a url to test a page')
    }
    
    async quit() {
        await this.driver.quit();
    }
    
    async sleep(num: number) {
        await this.driver.sleep(num)
    }
    
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element))
        return element   
    }
    
    async click(elementBy: By): Promise<void>{
        return ( await this.getElement(elementBy)).click();
    }
    
    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy);
        await input.clear();
        return input.sendKeys(keys);
    }
    
    async getText(elementBy: By): Promise<string>{
        return (await this.getElement(elementBy)).getText();
    }

    async scrollToElement(element: Locator) {
        let elementToScrollTo = await this.driver.findElement(element)
        await this.driver.executeScript("arguments[0].scrollIntoView();", elementToScrollTo);
        /* I don't like this sleep here. How can I get this to wait for the above 
        scrolling function to finsih without using sleep? */ 
        await this.driver.sleep(500)
    }
    
    async getAttribute(elementBy: By, attribute: string) {
        return (await (await this.getElement(elementBy)).getAttribute(attribute));
    }
}