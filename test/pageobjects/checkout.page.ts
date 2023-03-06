import page from "./page.js"
import checkout from "../elements/checkout.json" assert {type :"json"}
import testdata from "../testdata/testdata.json" assert {type :"json"}
import {getsubstringusingchar} from "../utilites/webUtils.js";
class CheckoutPage extends page{
    public get title(){
        return $(checkout.title)
    }
    public get firstName(){
        return $(checkout.firstName_input)
    }
    public get lastName(){
        return $(checkout.lastName_input)
    }
    public get zip(){
        return $(checkout.zipcode_input)
    }
    public get continueButton(){
        return $(checkout.continue_button)
    }
    public get errMsg(){
        return $(checkout.error_message)
    }
    public async errortext(){
        let text =await this.errMsg.getText()
        return text
    }
    public get paymmentinfo(){
        return $(checkout.payment_info)
    }
    public get shippinginfo(){
        return $(checkout.Delivery_info)
    }
    public get priceinfo(){
        return $(checkout.Item_Total)
    }
    public get taxinfo(){
        return $(checkout.tax)
    }
    public get total(){
        return $(checkout.total)
    }

    public get finishbutton(){
        return $(checkout.finish_button)
    }

    public get orderCompletheader(){
        return $(checkout.order_complete_header)
    }
    public get orderCompletetext(){
        return $(checkout.order_complete_text)
    }
    public get baccktoprodcutbutton(){
        return $(checkout.order_complete_backbutton)
    }
    public async itemPrice(){
        let price = await this.priceinfo.getText()
       return price
    }
    public async tax(){
        let price = await this.taxinfo.getText()
        return price
    }
    public async totalPrice(){
        let price = await this.total.getText()
        return price
    }

    public async clickfinishButton(){
        await this.finishbutton.click()
    }
    public async inputFirstName(){
        await this.firstName.setValue(testdata.order_info.first_name)
    }
    public async inputLastName(){
        await this.lastName.setValue(testdata.order_info.last_name)
    }
    public async inputZip(){
        await this.zip.setValue(testdata.order_info.Zip)
    }
    public async clickConinueButton(){
        await this.continueButton.click()
    }

    public async getconformatpagetext(){
        await this.orderCompletetext.getText()
    }
    public async getconformatpageheadertext(){
        await this.orderCompletheader.getText()
    }
    public async clickbackbutton(){
        await this.baccktoprodcutbutton.click()
    }

}
export default new CheckoutPage()