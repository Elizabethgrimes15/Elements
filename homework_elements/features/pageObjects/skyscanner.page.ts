import { expect } from "chai";
import { browser, by, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { skyscannerRepository } from "../objectRepository/skyscanner.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class SkyscannerPage {
    
    skyscannerRepo: skyscannerRepository;
    
    constructor() {
        this.skyscannerRepo = new skyscannerRepository;
    }

    public async clearBrowserData() {
        let browserHacks = new BrowserHacks;
        browserHacks.ClearBrowserData();
    }

    public async goToSkyscanner() {
        await browser.navigate().to(browser.params.skyscanner);
    }

    public async checkboxClick() {
        await this.skyscannerRepo.skyscannercheckbox.click();
    }

    public async checkboxSelect() {
        await expect(await this.skyscannerRepo.skyscannercheckbox.isSelected()).equal(true);
    }

    public async radioClick() {
        await this.skyscannerRepo.skyscannerradiobutton.click();
    }

    public async radioSelect() {
        await expect(await this.skyscannerRepo.skyscannerradiobutton.isSelected()).equal(true);
    }

}