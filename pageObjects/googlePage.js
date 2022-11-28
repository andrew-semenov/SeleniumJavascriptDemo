const {Builder, By, Key} = require('selenium-webdriver')
const BasePage = require('./basePage')
const assert = require('assert')

class GoogleSearchPage extends BasePage{
    async enter_search(text){
        await driver.findElement(By.css('input[name=q]')).sendKeys(text);
        await driver.findElement(By.css('input[name=q]')).sendKeys(Key.ENTER);
    }

    async assertSumResult(expected){
        const sumResult = driver.findElement(By.id('cwos'))
        let actual = await sumResult.getText()
        console.log(actual)
        console.log('done')
        assert.equal(actual, expected)
    }
}

module.exports = new GoogleSearchPage();