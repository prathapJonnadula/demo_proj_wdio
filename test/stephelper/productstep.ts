
import HomePage from '../pageobjects/home.page.js'
class Productstep{

    public async Navigatetoproductpage(xpath){
        let prod_xpath = await Promise.resolve(HomePage.getProductNameXpath(xpath))
       await $(prod_xpath).click()
        await HomePage.waitfor()
    }

    public async getProductName(xpath){
        let prod_name_xpath = await Promise.resolve(HomePage.getProductNameXpath(xpath))
        return await Promise.resolve(HomePage.getTextbyXapth(prod_name_xpath))
    }
    public async getProductDesc(xpath){
        let prod_desc_xpath = await Promise.resolve(HomePage.getProductDescXpath(xpath))
        return await Promise.resolve(HomePage.getTextbyXapth(prod_desc_xpath))
    }
    public async getProductPrice(xpath){
        let prod_price_xpath = await Promise.resolve(HomePage.getProductPriceXpath(xpath))
        return await Promise.resolve(HomePage.getTextbyXapth(prod_price_xpath))
    }
}
export default new Productstep();