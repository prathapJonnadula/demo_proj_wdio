import cartPage from "../pageobjects/cart.page.js";
import vales from "../utilites/values.json" assert {type: "json"}
import {expect as expectChai} from "chai";

class Cartstep{

    public async valdiateproductincart(prod_name, prod_desc, prod_price){
        let name=await Promise.resolve(cartPage.getTextbyXapth(await Promise.resolve(cartPage.getxpathofitem_name())))
        let desc = await Promise.resolve(cartPage.getTextbyXapth(await Promise.resolve(cartPage.getxpathofitem_desc())))
        let price = await Promise.resolve(cartPage.getTextbyXapth(await Promise.resolve(cartPage.getxpathofitem_price())))
        expectChai(price.includes(prod_price)).to.be.true
        expectChai(name.includes(prod_name)).to.be.true
        expectChai(desc.includes(prod_desc)).to.be.true
    }
    public async validateitemsremoved(){
        let elem=await Promise.resolve(cartPage.cartItemlist)
        expectChai(elem.length==0).to.be.true
    }
    public async removeitems(){
        await cartPage.clickRemove()
        await this.validateitemsremoved()
    }


}
export default new Cartstep()