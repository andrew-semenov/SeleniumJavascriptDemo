const googleSearchPage = require("../pageObjects/googlePage")


describe('Sum operation via google search', function(){
    beforeEach(function(){})

    afterEach(function(){
        // close the browser
        driver.quit()
    })

    it('Sum two numbers', async function(){
        const baseURL = 'https://www.google.com/';
        await googleSearchPage.open(baseURL);
        await googleSearchPage.enter_search('1+4');
        await googleSearchPage.assertSumResult('5');
    })
})
