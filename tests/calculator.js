describe('calculator tests', function(){

    it('addition test', function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);

        element(by.model('first')).sendKeys('2');
        browser.sleep(2000);
        element(by.model('second')).sendKeys('3');
        browser.sleep(2000);

        element(by.css('[ng-click="doAddition()"]')).click();
        browser.sleep(2000);

        let result =element(by.cssContainingText('.ng-binding', '5'));

        expect(result.getText()).toEqual('5');

        browser.sleep(2000);
        


    })

    it('multiplication test', function(){

    })
});