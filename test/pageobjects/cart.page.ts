import page from "./page.js"
import Shopingcart from "../elements/shopingcart.json" assert {type: "json"}
import hompage from "../elements/homepage.json" assert {type: "json"}
import {expect as expectChai} from "chai";

class CartPage extends page{
 public get shopincartbadge(){
        return $(Shopingcart.shoping_cart_badge)
    }
    public get shopingcart(){
        return $(Shopingcart.shoping_cart)
    }
    public get carTitle(){
     return $(Shopingcart.cart_title)
    }

    public get quanity(){
     return $(Shopingcart.quantitytab)
    }
    public get desctab(){
     return $(Shopingcart.description)
    }
    public get continueShopingbutton(){
     return $(Shopingcart.continue_shopping)
    }
    public get checkoutButton(){
     return $(Shopingcart.checkout_button)
    }

    public get cartItemlist(){
     return $$(Shopingcart.cart_item)
    }
    public get removeButton(){
     return $(Shopingcart.remove)
    }

    public async clickRemove(){
     await this.removeButton.click()
    }
    public async clickCheckoutButton(){
        await this.checkoutButton.click()
    }
    public async clickContinueShoppingbutton(){
     await this.continueShopingbutton.click()
    }
    public async getxpathofitem_name(){

      let val =  await Promise.resolve(this.cartItemlist.length)
        let elemxpath = [Shopingcart.cart_item,"[",val,"]",hompage.inventory_item_name]
        return elemxpath.join('')
    }
    public async getxpathofitem_desc(){
        let val =  await Promise.resolve(this.cartItemlist.length)
        let elemxpath = [Shopingcart.cart_item,"[",val,"]",hompage.inventory_item_desc]
        return elemxpath.join('')
    }
    public async getxpathofitem_price(){
        let val =  await Promise.resolve(this.cartItemlist.length)
        let elemxpath = [Shopingcart.cart_item,"[",val,"]",hompage.inventory_item_price]
        return elemxpath.join('')
    }
    public async isOnCartPage(){
        expectChai(await Promise.resolve(this.iselementdispalyed(this.carTitle))).to.be.true
        expectChai(await Promise.resolve(this.iselementdispalyed(this.checkoutButton))).to.be.true
        expectChai(await Promise.resolve(this.iselementdispalyed(this.carTitle))).to.be.true
        expectChai(await Promise.resolve(this.iselementdispalyed(this.quanity))).to.be.true
        expectChai(await Promise.resolve(this.iselementdispalyed(this.desctab))).to.be.true
        expectChai(await Promise.resolve(this.iselementdispalyed(this.shopingcart))).to.be.true
    }


}

export default new CartPage()