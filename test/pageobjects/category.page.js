const BasePage = require('./base.page');


class CategoryPage extends BasePage {

    get laptopsCategory() { return $("//a[normalize-space()='Laptops']"); }

    async clickLaptop() {
        await this.clickOnWebElement(this.laptopsCategory)
    }

    async navigateTo(url) {
        await browser.maximizeWindow();
        await browser.url(url);
    }

    async closeURL() {
        await browser.closeWindow();
    }
}

module.exports = new CategoryPage();