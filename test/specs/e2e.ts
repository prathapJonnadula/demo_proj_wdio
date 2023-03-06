import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import Productstep from "../stephelper/productstep.js";
import Detailsstep from "../stephelper/detailsstep.js";
import values from "../utilites/values.json" assert { type: "json"}
import DetailsPage from "../pageobjects/details.page.js";
import Homestep from "../stephelper/homestep.js";
import Cartstep from "../stephelper/cartstep.js";
import cartPage from "../pageobjects/cart.page.js";

describe('My Login application', () => {
    it('add and remove item form the cart and details page', async () => {
        await LoginPage.open()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        await LoginPage.login()
        await HomePage.isOnHomepage()
        await browser.pause(values.wait.defaultWait)
        /*
           select Item form available inventory
         */
        let prod_xpath = await Promise.resolve(HomePage.getproductxpath())
        let prod_name = await Productstep.getProductName(prod_xpath)
        let prod_Desc = await Productstep.getProductDesc(prod_xpath)
        let prod_price = await Productstep.getProductPrice(prod_xpath)
        console.log(prod_name,prod_Desc,prod_price)
        await Productstep.Navigatetoproductpage(prod_xpath);
        await browser.pause(values.wait.defaultWait)
        /*
      adding product to cart from details page
       */
        await Detailsstep.isonProdcutdetailsPage(prod_name,prod_Desc,prod_price)
        await DetailsPage.addprodtocart()
        /* verify product added to cart*/
        let cartvalue=await Detailsstep.getcartvalue()
        await Detailsstep.isproductaddedtocart(cartvalue)
        await Detailsstep.navigateandcheckisonhomepage()
        await Detailsstep.isproductaddedtocart(cartvalue)
        await browser.pause(values.wait.defaultWait)
        await Homestep.navigatetocartpgae()
        await browser.pause(4000)
        await Cartstep.valdiateproductincart(prod_name,prod_Desc,prod_price)
        await Cartstep.removeitems()
        await cartPage.clickContinueShoppingbutton()
        await browser.pause(4000)
        await Homestep.vlidateremovebuttonchangedtoaddtocart(prod_xpath)
    })
})