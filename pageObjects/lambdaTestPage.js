const BasePage = require("./basePage");
const {By, Key} = require('selenium-webdriver');

class LambdaTestPage extends BasePage{
    async addTodo(){
        await driver
        .findElement(By.id("sampletodotext"))
        .sendKeys("Learn Selenium", Key.RETURN)
    }

    async getText(){
        let todoText = await driver
            .findElement(By.xpath("//li[last()]"))
            .getText()
            .then(function(value){
                // console.log('test')
                return value
            });
    }

}

module.exports = new LambdaTestPage();