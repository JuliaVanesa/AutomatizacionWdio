
module.exports = class BasePage {


    async clickOnWebElement(element) {
        await element.waitForClickable();
        await element.click();
    }

    async sendKeysToWebElement(element, text) {
        if (text !== "") {
            await element.waitForExist();
            await element.setValue(text);
        }
    }

    async getTextFromWebElement(element) {
        await element.waitForExist();
        const text = await element.getText();
        return (text);
    }
}
