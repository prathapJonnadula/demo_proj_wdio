import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';
import testdata from '../testdata/testdata.json' assert { type: "json" };
import values from '../utilites/values.json' assert  { type: "json" };
import webUtils from '../utilites/webUtils.ts'
import {isdisplayed} from "../utilites/webUtils.ts";
import login from '../elements/login.json' assert { type: "json"}

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $(login.usernsame);
    }

    public get inputPassword () {
        return $(login.password);
    }

    public get btnSubmit () {
        return $(login.loginbutton)
    }

    public get loginlogo(){
        return $(login.loginlogo)
    }
    public async gettextloginlogo(){
        return $(login.loginlogo)
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login ( ) {
        await this.inputUsername.setValue(testdata.creds.username);
        await this.inputPassword.setValue(testdata.creds.password);
        await this.btnSubmit.click();
        await browser.pause(values.wait.defaultWait)
    }
    public async isOnLogin ( ) {
        expect(this.inputUsername).toBeDisplayed()
        expect(this.inputPassword).toBeDisplayed()
        expect(this.btnSubmit).toBeDisplayed()
        expect(await Promise.resolve(this.gettextloginlogo())).toHaveText(values.loginlogo)
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
