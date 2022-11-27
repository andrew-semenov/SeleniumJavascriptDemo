const { Builder } = require('selenium-webdriver');
driver = new Builder().forBrowser('chrome').build();
// driver = new Builder().forBrowser('firefox').build();
driver.manage().setTimeouts({ implicit: 50000000 });
// driver.manage().setTimeouts({ implicit: 500 });

class BasePage {
    constructor(){
        global.driver = driver;
    }

    async open(url){
        await driver.get(url)
    }

}

module.exports = BasePage;