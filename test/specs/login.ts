import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        await LoginPage.login()
        await HomePage.isOnHomepage()
    })
})