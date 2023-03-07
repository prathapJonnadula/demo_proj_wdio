import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import Homestep from "../stephelper/homestep.js";
import Detailsstep from "../stephelper/detailsstep.js";
import CartPage from "../pageobjects/cart.page.js";


describe('My Login application', () => {
    it('add item cart and check for cart update', async () => {
        await LoginPage.open()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        await LoginPage.login()
        await HomePage.isOnHomepage()
        let prod_xpath = await Promise.resolve(HomePage.getproductxpath())
        let prod_detils = await Promise.resolve(HomePage.getProdcutdetails(prod_xpath))
        await HomePage.waitfor()
        let itemno=await Detailsstep.getcartvalue()
        await Homestep.additemtocart(prod_xpath)
        await Detailsstep.cartisupdated(itemno)
        await Homestep.navigateandVerifyproductaddedtocart(prod_detils[0],prod_detils[1],prod_detils[2])
        await CartPage.clickContinueShoppingbutton()

    })
})