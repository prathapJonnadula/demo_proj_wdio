import page from './page.js'
import hompage from '../elements/homepage.json' assert { type: "json"}
import Shopingcart from '../elements/shopingcart.json' assert {type : 'json'}
import { expect as expectChai } from 'chai'
import {getRndInteger} from "../utilites/webUtils.ts";
import Productstep from "../stephelper/productstep.js";

class HomePage extends page{

    /**
     * Validate on login page title
     */
    public get hompageTitle(){
        return $(hompage.logo)
    }
    public get shoppingCart(){
        return $(Shopingcart.shoping_cart)
    }

    public get sortContainer(){
        return $(hompage.sort_container)
    }

    public get burgerMenu(){
        return $(hompage.burger_menu)
    }
    public get producTitle(){
        return $(hompage.ptroduct_title)
    }

    public get prodcutContaier(){
        return $(hompage.inventory_container)
    }

    public get productList(){
        return $$(hompage.inventory_item)
    }
    public async cickBurgerMenu(){
        await this.burgerMenu.click()
    }

    public get bugrgermenuopen(){
        return $(hompage.bugermentopen)
    }

    public get resetapp(){
        return $(hompage.burger_menu_resetApp)
    }

    public get logoutbutton(){
        return $(hompage.burger_menu_logout)
    }
    public async clicklogoutbutton() {
       let elem= await this.logoutbutton
        let xloc = elem.getLocation('x')
        let yloc = elem.getLocation('y')
       await browser.touchPerform([{action:'press',options:{x:xloc,y:yloc}},{action: 'release'}])
    }

    public async clickresetapp(){
        browser.pause(4000)
        await this.resetapp.click()
    }

    public async getproductxpath(){
        let rand = getRndInteger(await Promise.resolve(this.productList.length));
        let item = hompage.inventory_item+ "["+rand+"]"
        return item
    }
    public async getProductNameXpath(xpath){
        let elemxpath = [xpath,hompage.inventory_item_description,hompage.inventory_item_name]
        return elemxpath.join('')
    }

    public async getProductDescXpath(xpath){
        let elemxpath = [xpath,hompage.inventory_item_description,hompage.inventory_item_desc]
        return elemxpath.join('')
    }
    public async getProductPriceXpath(xpath){
        let elemxpath = [xpath,hompage.inventory_item_description,hompage.inventory_item_price]
        return elemxpath.join('')
    }
    public async getaddtocartxpathofitem(xpath){
        let elemxpath = [xpath,hompage.add_to_cart_button]
        return elemxpath.join('')
    }
    public  async getProdcutdetails(xpath){
        let prod_name = await Productstep.getProductName(xpath)
        let prod_Desc = await Productstep.getProductDesc(xpath)
        let prod_price = await Productstep.getProductPrice(xpath)
        return [prod_name, prod_Desc,prod_price]
    }



    public async isOnHomepage(){
        expectChai(await Promise.resolve(this.iselementdispalyed(this.hompageTitle))).to.be.true
        expectChai(await Promise.resolve(this.iselementdispalyed(this.shoppingCart))).to.be.true
        expectChai(await Promise.resolve(this.iselementdispalyed(this.sortContainer))).to.be.true
        expectChai(await Promise.resolve(this.iselementdispalyed(this.burgerMenu))).to.be.true
        expectChai(await Promise.resolve(this.iselementdispalyed(this.producTitle))).to.be.true
        expectChai(await Promise.resolve(this.iselementdispalyed(this.prodcutContaier))).to.be.true
        expect(await  Promise.resolve(this.getelemtext(this.hompageTitle))).toHaveText("Swag Labs")
    }

}
export default new HomePage();