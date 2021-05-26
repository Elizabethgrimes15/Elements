import { expect } from "chai";
import { browser, by, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { ozonRepository } from "../objectRepository/ozon.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class OzonPage {
    
    ozonRepo: ozonRepository;

    constructor() {
        this.ozonRepo = new ozonRepository;
    }

    public async clearBrowserData() {
        let browserHacks = new BrowserHacks;
        browserHacks.ClearBrowserData();
    }

    public async goToOzon() {
       await browser.navigate().to(browser.params.ozon);
    }

    public async ddlClick() {
        await this.ozonRepo.ozonddl.element(by.cssContainingText('Везде','c0t1')).click();
    }

    public async ddlCheck() {
        await expect(await this.ozonRepo.ozonddl.element(by.cssContainingText('Электроника','Мебель')).isSelected()).equal(true);
    }

}