/**
 * @file navigation.js
 * @author Dylan Johnson <therealdylanjohnson@gmail.com>
 * @copyright Dylan Johnson, 2014
 */
// TODO: use the Cucumber World to import these in all feature files
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

function removeItem(collection, item) {
    var index = collection.indexOf(item);

    if (index !== -1) {
        collection.splice(index, 1);
    }
}

module.exports = function () {
    // TODO: use the Cucumber World to store a reference to protractor
    var ptor;

    this.Before(function (next) {
        ptor = protractor.getInstance();
        next();
    });

    this.Then(/^I should see the following links in the navigation bar:$/, function (table, next) {
        var raw = table.raw(),  // `table` came from the default step definition; CukeJS supports Table Nodes :)
            expectedLinks = [];

        // now we're going to hack together an array of the items we expect to be represented in a link in the navbar.
        // NOTE: this is ugly. Don't do this.
        raw.map(function (item) {
            expectedLinks.push(item[0]);
        });

        // get all of the links the navBar and remove the corresponding items from the array of expected links
        element.all(by.css('#top-nav > ul > li > a')).then(function (navLinks) {
            // loop over each nav link
            navLinks.map(function (navLink, index, navLinks) {
                navLink.getText().then(function (text) {
                    removeItem(expectedLinks, text);

                    // if it's the last one, our expectation array should be empty. another ugly hack; could use a
                    // promise for this.
                    if (index === navLinks.length - 1) {
                        expect(expectedLinks).to.be.empty;
                        next();
                    }
                });
            });
        });
    });
};