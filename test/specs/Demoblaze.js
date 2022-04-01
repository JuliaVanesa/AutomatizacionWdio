const CategoryPage = require ('../pageobjects/category.page');
const ProductsPage = require('../pageobjects/products.page');
const DetailPage = require ('../pageobjects/detail.page');
const CartPage = require('../pageobjects/cart.page');
const MenuPage = require('../pageobjects/menu.page');
const InformationPage = require('../pageobjects/information.page');
const ModalConfirmPage = require('../pageobjects/modalConfirm.page');
const URL = 'https://www.demoblaze.com/';

describe('Test Demoblaze WebDriverIO', () => {
    it('Test Demoblaze', async () => {

        // Inicio la URL
        await CategoryPage.navigateTo(URL);

        // Click en categoria "Laptos"
        await CategoryPage.clickLaptop();

        // Click la primer Laptop
        await ProductsPage.clickFirstLaptop();

        // Laptop y Precio. Expect y hago click en Add to Cart.
        const laptopDetail = await DetailPage.getLaptop() ;
        const precioDetail = await DetailPage.getPrice();
        await expect(laptopDetail).toEqual("Sony vaio i5");
        await expect(precioDetail).toEqual("790");
        await DetailPage.clickToAddCart();

        //  Msj de alerta, comparo msj, aceptar.
        await browser.pause(1000);
            const msjAlert = await browser.getAlertText();
            await browser.acceptAlert();
            await expect(msjAlert).toEqual("Product added");
        

        // Voy al mane cart
        await MenuPage.clickCart();

        // Modelo y Precio del Cart. expect precios de Detalle del Producto y click en Place Order
        const laptopCart = await CartPage.CartTitle();
        const precioCart = await CartPage.CartPrice();
        await expect(precioDetail).toEqual(precioCart);
        await expect(laptopDetail).toEqual(laptopCart);
        await CartPage.clickPlaceOrder();
      

        //Formulario y hago click en purchase
        await InformationPage.formComplete("NOMBRE", "PAIS", "CIUDAD", "TARJETA CREDITO", "MES", "AÑO");
        await InformationPage.clickPurchase();

        //Titulo del msj de confirmacion y comparon lo que obtengo
        const tituloMsj = await ModalConfirmPage.textConfirm();
        await expect(tituloMsj).toEqual("Thank you for your purchase!");

        //Confirmo el nombre, tarjeta y monto
        const dataModal = await ModalConfirmPage.getValidateData();
        await expect(dataModal.includes("NOMBRE")).toBe(true);
        await expect(dataModal.includes("TARJETA CREDITO")).toBe(true);
        await expect(dataModal.includes(precioCart)).toBe(true);

        //Click en Boton "OK" 
        browser.pause(2000);
        await ModalConfirmPage.confirmOk();

        //Cierro browser
        await CategoryPage.closeURL();
    });
});


