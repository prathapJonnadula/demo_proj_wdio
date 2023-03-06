import DetailsPage from "../pageobjects/details.page.js";
import {expect, expect as expectChai} from "chai";
import HomePage from "../pageobjects/home.page.js";
import CartPage from "../pageobjects/cart.page.js";
import cartPage from "../pageobjects/cart.page.js";
import detailsPage from "../pageobjects/details.page.js";

class Detailsstep{

    public async validateonexactProductDetailsPage(prod_name, prod_desc, prod_price) {
        let price=await Promise.resolve(DetailsPage.getelemtext(DetailsPage.productPrice))
        let name = await Promise.resolve(DetailsPage.getelemtext(DetailsPage.productName))
        let desc = await Promise.resolve(DetailsPage.getelemtext(DetailsPage.productDesc))
        expectChai(price.includes(prod_price)).to.be.true
        expectChai(name.includes(prod_name)).to.be.true
        expectChai(desc.includes(prod_desc)).to.be.true
    }
    public async isonProdcutdetailsPage(prod_name, prod_desc, prod_price){
        await DetailsPage.isonProductDetailspage();
        await this.validateonexactProductDetailsPage(prod_name, prod_desc, prod_price)
    }

    public async cartisupdated(itemno){

           let text= await Promise.resolve(DetailsPage.getelemtext(cartPage.shopincartbadge))
        expectChai(parseInt(text)>itemno).to.be.true
    }
    public async getcartvalue(){
        if(!(await detailsPage.iselemexist(CartPage.shopincartbadge))){
            return 0
        }else{
            let text= await Promise.resolve(DetailsPage.getelemtext(cartPage.shopincartbadge))
            return parseInt(text)
        }
    }

    public async isproductaddedtocart(items){
        expectChai(await Promise.resolve(DetailsPage.iselementdispalyed(DetailsPage.removeButton)))
        await this.cartisupdated(items)
    }
    public async navigateandcheckisonhomepage(){
        await DetailsPage.clickBackButton()
        await HomePage.isOnHomepage()

    }

}
export default  new Detailsstep()