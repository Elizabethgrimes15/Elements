import { browser, by, element, ElementFinder, ExpectedConditions, Key } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { OnlinerPage } from "../../features/pageObjects/onliner.page";
import { OzonPage } from "../../features/pageObjects/ozon.page";
import { SkyscannerPage } from "../../features/pageObjects/skyscanner.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    const onlinerPage = new OnlinerPage;
    const skyscannerPage = new SkyscannerPage;
    const ozonPage = new OzonPage;

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

    //Hooks
    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        //ACTIONS AFTER EXECUTING EACH TEST, I.E. CLEANUP
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on Onliner homepage$/, async () => {
        await onlinerPage.goToOnliner();
    });

    this.Then(/^I hover over to 'Дома и Квартиры' menu$/, async () => {
        await onlinerPage.hoverOver();
    });

    this.Then(/^the dropdown list expands$/, async () => {
        await onlinerPage.hoverAction();
    });

    this.Given(/^I am on Skyscanner homepage$/, async () => {
        await skyscannerPage.goToSkyscanner();
    });

    this.When(/^I click 'One way' radiobutton$/, async () => {
        await skyscannerPage.radioClick();
    });

    this.Then(/^the radiobutton is selected$/, async () => {
        await skyscannerPage.radioSelect();
    });

    this.When(/^I click to 'Non-stop flights only' checkbox$/, async () => {
        await skyscannerPage.checkboxClick();
    });

    this.Then(/^checkbox is checked$/, async () => {
        await skyscannerPage.checkboxSelect();
    });

    this.Given(/^I am on Ozon homepage$/, async () => {
        await ozonPage.goToOzon();
    });

    this.When(/^I click to 'Везде' in a search bar$/, async () => {
        await ozonPage.ddlClick();
    });

    this.Then(/^the categories dropdown list expands$/, async () => {
        await ozonPage.ddlCheck();
    });
}    