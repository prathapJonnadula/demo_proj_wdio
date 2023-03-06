
import page from './page.js'
import Details from '../elements/details.json' assert {type: 'json'}
import Shopingcart from '../elements/shopingcart.json' assert {type : 'json'}
import {expect as expectChai} from "chai";

class DetailsPage extends page{

    public get productName(){
        return $(Details.product_name)
    }
    public get productDesc(){
        return $(Details.product_details)
    }
    public get productPrice(){
        return $(Details.product_price)
    }
    public get addtocartbutton(){
        return $(Details.add_to_cart_button)
    }
    public get burgerMenu(){
        return $(Details.burger_menu)
    }
    public get bacButton(){
        return $(Details.back_button)
    }

    public get removeButton(){
        return $(Details.remove_button)
    }
    public async getproduct_Name(){
        return await Promise.resolve(this.getelemtext(this.productName))
    }
    public async getproductDesc(){
        return await Promise.resolve(this.getelemtext(this.productDesc))
    }
    public async getproductPrice(){
        return await Promise.resolve(this.getelemtext(this.productPrice))
    }
    public async addprodtocart(){
        await this.addtocartbutton.click()
    }
    public async clickBackButton(){
        await this.bacButton.click()
    }

    public async isonProductDetailspage(){
        expectChai(await Promise.resolve(this.iselementdispalyed(this.productName))).to.be.true
        expectChai(await Promise.resolve(this.iselementdispalyed(this.productDesc))).to.be.true
        expectChai(await Promise.resolve(this.iselementdispalyed(this.productPrice))).to.be.true
        expectChai(await Promise.resolve(this.iselementdispalyed(this.burgerMenu))).to.be.true
        expectChai(await Promise.resolve(this.iselementdispalyed(this.addtocartbutton))).to.be.true
        expectChai(await Promise.resolve(this.iselementdispalyed(this.bacButton))).to.be.true
    }


}

export default new DetailsPage()