import env from '../testdata/url.json' assert {type: "json" };
import values from '../utilites/values.json' assert {type:"json"}
import { expect as expectChai } from 'chai'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(env.url)
    }

    public async iselementdispalyed(elem){
        let element =  await elem
        let display= await element.isDisplayed()
        return display
    }
    public async getelemtext(elem){
        let element =  await elem
        let elemtext= await element.getText()
        return elemtext
    }

    public async getelement(xpath){
            return $(xpath)
    }

    public async iselemexist(xpath){
        let exist = false
        try{
            await this.getelement(xpath)
            exist = true

        }
        catch (e){
            console.log("element with xpath not found")
        }
        return exist
    }

    public async getTextbyXapth(xpath){
        let elem =await Promise.resolve(this.getelement(xpath))
        return  await Promise.resolve(this.getelemtext(elem))

    }
    public async clickelement(xpath){
        let elem = await Promise.resolve(this.getelement(xpath))
        this.waitfor()
        await elem.click()
    }
    public async waitfor(){
        await browser.pause(values.wait.defaultWait)
    }

}
