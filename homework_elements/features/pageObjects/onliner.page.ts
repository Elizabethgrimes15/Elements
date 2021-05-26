import { browser, by, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { onlinerRepository } from "../objectRepository/onliner.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class OnlinerPage {
    
    onlinerRepo: onlinerRepository;

    constructor() {
        this.onlinerRepo = new onlinerRepository;
    }

    public async clearBrowserData() {
        let browserHacks = new BrowserHacks;
        browserHacks.ClearBrowserData();
    }

    public async goToOnliner() {
       await browser.navigate().to(browser.params.onliner);
    }

    public async hoverOver() {
        await browser.actions().mouseMove(this.onlinerRepo.onlinerclass).perform();
    }

    public async hoverAction() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo.onlinerhover), defaultTimeout, "Hover can't be applied");
    }

}