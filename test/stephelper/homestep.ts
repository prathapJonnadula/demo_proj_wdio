import HomePage from "../pageobjects/home.page.js";
import cartstep from "./cartstep.js";
import cartPage from "../pageobjects/cart.page.js";
import detailsstep from "./detailsstep.js";
import homePage from "../pageobjects/home.page.js";

class Homestep{

    public async navigatetocartpgae(){
        HomePage.shoppingCart.click()
    }

    public async vlidateremovebuttonchangedtoaddtocart(xpath){
        let prod_xpath =await Promise.resolve(HomePage.getaddtocartxpathofitem(xpath))
        expect(await Promise.resolve(HomePage.getTextbyXapth(prod_xpath))).toHaveText("Add to cart")

    }
    public async additemtocart(xpath){
        let prod_xpath = await Promise.resolve(HomePage.getaddtocartxpathofitem(xpath))
        browser.pause(4000)
         await HomePage.clickelement(prod_xpath)
    }

    public async navigateandVerifyproductaddedtocart(prod_name, prod_desc, prod_price){
        await this.navigatetocartpgae()
        await browser.pause(4000)
        await cartPage.isOnCartPage()
        await cartstep.valdiateproductincart(prod_name, prod_desc, prod_price)
    }
    public async clickandVerifyburgerMenu(){
        await HomePage.cickBurgerMenu()
        await HomePage.bugrgermenuopen
    }

    public async clickandverifyisappreset(xpath){
        await HomePage.clickresetapp()
        expect(await Promise.resolve(detailsstep.getcartvalue())).toHaveText("0")
        let addt_cart=await homePage.getaddtocartxpathofitem(xpath)
       expect( await Promise.resolve(await Promise.resolve(homePage.getelement(addt_cart)))).toBeExisting()
    }

    public async logout(){
        await homePage.cickBurgerMenu()
        await homePage.clicklogoutbutton()
    }

}
export default new Homestep()