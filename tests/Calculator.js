let homepage = require('../pages/homePage')
describe('demo calcurator tests', function () {
    it('addition test', function () {
        homepage.getBrowser('https://juliemr.github.io/protractor-demo/')

        homepage.enterFirst('4')
        homepage.enterSecond('5')
        homepage.cllickGo();
        homepage.verifyResult('9')

        
        //old version without POM
        // browser.get('https://juliemr.github.io/protractor-demo/');
        // var input1 = element(by.model('first'));
        // input1.sendKeys('5');
        // var input2 = element(by.model('second'));
        // input2.sendKeys('6');

        // var action = element(by.css('[ng-click="doAddition()"]')).click();
        // var output = element(by.cssContainingText('.ng-binding','11'));
        //   expect(output.getText()).toEqual('11');

        // URL: element(by.css('input[ng-model="first"]')).click();
        // URL: element(by.css('input[ng-model="first"]')).clear().sendKeys('1');
        // URL: element(by.css('select[ng-model="operator"]')).click();
        // URL: element(by.css('select[ng-model="operator"]')).click();
        // URL: element(by.css('input[ng-model="second"]')).click();
        // URL: element(by.css('input[ng-model="second"]')).clear().sendKeys('2');
        // URL: element(by.css('button')).click();


        browser.sleep(3000)

    });
    it(' test2', function () {
        homepage.getBrowser('https://juliemr.github.io/protractor-demo/')

        homepage.enterFirst('4')
        homepage.enterSecond('5')
        homepage.cllickGo();
        homepage.verifyResult('5')

        
        //old version without POM
        // browser.get('https://juliemr.github.io/protractor-demo/');
        // var input1 = element(by.model('first'));
        // input1.sendKeys('5');
        // var input2 = element(by.model('second'));
        // input2.sendKeys('6');

        // var action = element(by.css('[ng-click="doAddition()"]')).click();
        // var output = element(by.cssContainingText('.ng-binding','11'));
        //   expect(output.getText()).toEqual('11');

        // URL: element(by.css('input[ng-model="first"]')).click();
        // URL: element(by.css('input[ng-model="first"]')).clear().sendKeys('1');
        // URL: element(by.css('select[ng-model="operator"]')).click();
        // URL: element(by.css('select[ng-model="operator"]')).click();
        // URL: element(by.css('input[ng-model="second"]')).click();
        // URL: element(by.css('input[ng-model="second"]')).clear().sendKeys('2');
        // URL: element(by.css('button')).click();


        browser.sleep(3000)

    });

})