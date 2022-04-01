const BasePage = require('./base.page');

class ProductsPage extends BasePage {

    get cardLaptop() {
        return $("//a[text()='Sony vaio i5']");
    }

    async clickFirstLaptop() {
        await this.clickOnWebElement(this.cardLaptop)
    }
}

module.exports = new ProductsPage();