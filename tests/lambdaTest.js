const lambdaTestPage = require('../pageObjects/lambdaTestPage')
const {By, Key} = require('selenium-webdriver')

describe('add another todo tests', function(){
    beforeEach(function(){})

    afterEach(function(){
        // close the browser
        driver.quit();
    })


    it('Successfully adds another todo to application', async function(){
        const basicURL = 'https://lambdatest.github.io/sample-todo-app/';
        lambdaTestPage.open(basicURL);
        lambdaTestPage.addTodo();
        // // const text = lambdaTestPage.getText();
        let todoText = await driver
        .findElement(By.xpath("//li[last()]"))
        .getText()
        .then(function(value){
            // console.log('test: ', todoText)
            return value
        });
        // console.log(await todoText)
    })
});