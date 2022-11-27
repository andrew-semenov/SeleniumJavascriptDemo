const {Builder, By, Key} = require('selenium-webdriver')
const BasePage = require('./basePage')

class GoogleSearchPage extends BasePage{
    enter_search(text){
        driver.findElement(By.css('input[name=q]')).sendKeys(text);
        driver.findElement(By.css('input[name=q]')).sendKeys(Key.ENTER);
    }
}

module.exports = new GoogleSearchPage();