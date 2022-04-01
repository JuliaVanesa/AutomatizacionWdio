const BasePage = require('./base.page');


class MenuPage extends BasePage {

    get getCart() { return $("//a[normalize-space()='Cart']"); }

    async clickCart() {
        await this.clickOnWebElement(this.getCart)
    }
}

module.exports = new MenuPage();