import { by, element, ElementFinder } from "protractor";

export class onlinerRepository {
    readonly onlinerclass: ElementFinder = element(by.cssContainingText('.b-main-navigation__item','Дома и квартиры'));
    readonly onlinerhover: ElementFinder = element(by.css('.b-main-navigation__dropdown_visible'));
}