const BasePage = require('./base.page');


class CartPage extends BasePage {
   
    get getTitle() { return $("//tr[@class='success']//td[2]"); }
    get getPrice() { return $("//tr[@class='success']//td[3]"); }
    get getPlaceOrder() { return $("//button[normalize-space()='Place Order']"); }

    async CartTitle() {
        return (await this.getTextFromWebElement(this.getTitle))
    }

    async CartPrice() {
        return (await this.getTextFromWebElement(this.getPrice));
    }

    async clickPlaceOrder() {
        await this.clickOnWebElement(this.getPlaceOrder);
    }
}

module.exports = new CartPage();