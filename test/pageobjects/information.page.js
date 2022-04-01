const BasePage = require('./base.page');

class InformationPage extends BasePage {

    get inputName() { return $("#name"); }
    get inputCountry() { return $("#country"); }
    get inputCity() { return $("#city"); }
    get inputCard() { return $("#card"); }
    get inputMonth() { return $("#month"); }
    get inputYear() { return $("#year"); }
    get buttonPurchase() { return $("//button[normalize-space()='Purchase']"); }

    async formName(name) {
        this.sendKeysToWebElement(this.inputName, name);
    }

    async formCountry(country) {
        this.sendKeysToWebElement(this.inputCountry, country);
    }

    async formCity(city) {
        this.sendKeysToWebElement(this.inputCity, city);
    }

    async formCard(card) {
        this.sendKeysToWebElement(this.inputCard, card);
    }

    async formMonth(month) {
        this.sendKeysToWebElement(this.inputMonth, month);
    }

    async formYear(year) {
        this.sendKeysToWebElement(this.inputYear, year);
    }

    async formComplete(name, country, city, card, month, year) {
        await this.formName(name);
        await this.formCountry(country);
        await this.formCity(city);
        await this.formCard(card);
        await this.formMonth(month);
        await this.formYear(year);
    }

    async clickPurchase() {
        await this.clickOnWebElement(this.buttonPurchase);
    }
}

module.exports = new InformationPage();