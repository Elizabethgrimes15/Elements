import { by, element, ElementFinder } from "protractor";

export class skyscannerRepository {
    readonly skyscannercheckbox: ElementFinder = element(by.css('directOnly'));
    readonly skyscannerradiobutton: ElementFinder = element(by.css('trip-type-selector'));
}