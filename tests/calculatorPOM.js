let homepage=require('../pages/homepage');
describe('calculator tests', function(){

    it('addition test', function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);

        homepage.enterFirstNumber('3');
        homepage.enterSecondNumber('4');
        homepage.clickgoButton();
        homepage.verifyResult('7')
        browser.sleep(2000);
        


    })

});