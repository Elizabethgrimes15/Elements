import { by, element, ElementFinder } from "protractor";

export class ozonRepository {
    readonly ozonddl: ElementFinder = element(by.cssContainingText('Везде','c0t1'));
}