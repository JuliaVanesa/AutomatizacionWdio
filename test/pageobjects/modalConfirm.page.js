

const BasePage = require('./base.page');


class ModalConfirmPage extends BasePage {
  
    get msjConfirm() { return $("//h2[normalize-space()='Thank you for your purchase!']"); }
    get buttonOK() { return $("//button[contains(text(),'OK')]"); }
    get validateData() { return $("//p[@class='lead text-muted ']"); }

    async confirmOk() {
        await this.clickOnWebElement(this.buttonOK);
    }

    async textConfirm() {
        return (await this.getTextFromWebElement(this.msjConfirm));
    }

    async getValidateData() {
        return (await this.getTextFromWebElement(this.validateData));
    }
}

module.exports = new ModalConfirmPage();
