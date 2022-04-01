const BasePage = require('./base.page');

class DetailPage extends BasePage {

    get nameLaptop() { return $("//h2[normalize-space()='Sony vaio i5']"); }
    get priceLaptop() { return $("//h3[@class='price-container']"); }
    get addToCart() { return $("//a[normalize-space()='Add to cart']"); }

    async getLaptop() {

        return (await this.getTextFromWebElement(this.nameLaptop))
    }

    async getPrice() {
        const price = await this.getTextFromWebElement(this.priceLaptop);
        const initP = price.indexOf("$") + 1;
        const finPrice = price.indexOf("*") - 1;
        return (price.substring(initP, finPrice));
    }

    async clickToAddCart() {
        await this.clickOnWebElement(this.addToCart);
    }
}


module.exports = new DetailPage();