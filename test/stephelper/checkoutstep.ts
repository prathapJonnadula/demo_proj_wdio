import checkoutPage from "../pageobjects/checkout.page.js";
import checkout from "../elements/checkout.json" assert {type: "json"}
import values from "../utilites/values.json" assert {type: "json"}
import HomePage from "../pageobjects/home.page.js";
import CheckoutPage from "../pageobjects/checkout.page.js";
import {expect as expectChai} from "chai";
import homePage from "../elements/homepage.json" assert {type: "json"};
import detailsstep from "./detailsstep";
import detailsPage from "../pageobjects/details.page";

class Checkoutstep{
    public async firstNameErrormsg(){
        await checkoutPage.clickConinueButton()
        await checkoutPage.waitfor()
        let err_text = await checkoutPage.errortext()
        await expectChai(err_text.includes(values.err_firstname)).to.be.true
    }
    public async lastNameErrormsg(){
        await checkoutPage.inputFirstName()
        await checkoutPage.clickConinueButton()
        let err_text = await checkoutPage.errortext()
        await expectChai(err_text.includes(values.err_lastname)).to.be.true
    }
    public async zipErrormsg(){
        await checkoutPage.inputFirstName()
        await checkoutPage.inputLastName()
        await checkoutPage.clickConinueButton()
        let err_text = await checkoutPage.errortext()
        await expectChai(err_text.includes(values.err_zip)).to.be.true
    }

    public async validateErrormsgandEnterDetails(){
        await this.firstNameErrormsg()
        await this.lastNameErrormsg()
        await this.zipErrormsg()
        await checkoutPage.inputZip()
    }

    public async validate_proddetails(prod_name, prod_desc, prod_price){
        expect(await Promise.resolve(checkoutPage.getTextbyXapth(homePage.inventory_item_name))).toHaveText(prod_name)
        expect(await Promise.resolve(checkoutPage.getTextbyXapth(homePage.inventory_item_desc))).toHaveText(prod_desc)
        expect(await Promise.resolve(checkoutPage.getTextbyXapth(homePage.inventory_item_price))).toHaveText(prod_price)
    }
    public async validateisonPaymentinfopage(){
        expect(await Promise.resolve(HomePage.producTitle)).toBeDisplayed()
        expect(await Promise.resolve(checkoutPage.paymmentinfo)).toBeDisplayed()
        expect(await Promise.resolve(checkoutPage.shippinginfo)).toBeDisplayed()
        expect(await Promise.resolve(checkoutPage.priceinfo)).toBeDisplayed()
        expect(await Promise.resolve(checkoutPage.taxinfo)).toBeDisplayed()
        expect(await Promise.resolve(checkoutPage.total)).toBeDisplayed()
    }
    public async validatepriceandClickfinishButton(){
        let price =await Promise.resolve(checkoutPage.itemPrice())
        expect(await Promise.resolve(checkoutPage.getTextbyXapth(homePage.inventory_item_price))).toHaveText(price)
        price = price.toString().slice(price.indexOf("$")+1)
        const prod_price = parseFloat(price)
        price = await Promise.resolve(checkoutPage.tax())
        price = price.toString().slice(price.indexOf("$")+1)
        const prod_tax = parseFloat(price)
        price = await Promise.resolve(checkoutPage.totalPrice())
        price = price.toString().slice(price.indexOf("$")+1)
        const prod_total = parseFloat(price)
        expectChai (prod_total == (prod_price+prod_tax)).to.be.true
        await CheckoutPage.clickfinishButton()
    }

    public async validateisonorderconfirmpageandnavigatebacktohomepage(){
        expect(await Promise.resolve(checkoutPage.getconformatpageheadertext())).toHaveText(values.checkout_completepage_title)
        expect(await Promise.resolve(checkoutPage.getconformatpagetext())).toHaveText(values.complete_msg)
        await checkoutPage.clickbackbutton()
    }




}

export default new Checkoutstep()