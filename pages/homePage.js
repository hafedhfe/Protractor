let homepage = function () {
    var input1 = element(by.model('first'));
    var input2 = element(by.model('second'));
    var action = element(by.css('[ng-click="doAddition()"]'));
    // var output = element(by.cssContainingText('.ng-binding', '11'));
    this.getBrowser = function (url) {
        browser.get(url);
    }
    this.enterFirst = function (x) {
        input1.sendKeys(x)
    }
    this.enterSecond = function (y) {
        input2.sendKeys(y)
    }
    this.cllickGo = function () {
        action.click()
    }

this.verifyResult = function (result) {
    var output = element(by.cssContainingText('.ng-binding', result));
    expect(output.getText()).toEqual(result);

}
};
module.exports= new homepage();