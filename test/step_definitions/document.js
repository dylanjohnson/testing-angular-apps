// TODO: use the Cucumber World to import these in all feature files
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function () {
    var ptor;

    this.Before(function (next) {
        ptor = protractor.getInstance();
        next();
    });

    this.Given(/^I go to the Pizza Shop homepage$/, function (next) {
        browser.get('/');
        expect(ptor.getCurrentUrl()).to.eventually.match(/\/home/).then(function () {
            next();
        });
    });

    this.Then(/^the title should be "([^"]*)"$/, function (titleText, next) {
        expect(browser.getTitle()).to.eventually.equal(titleText).then(function () {
            next();
        });
    });
};