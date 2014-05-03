/**
 * @file Configuration for running protractor tests
 * @author Dylan Johnson <therealdylanjohnson@gmail.com>
 * @copyright Dylan Johnson, 2014
 */
exports.config = {
    chromeOnly: true,
    chromeDriver: '../node_modules/protractor/selenium/chromedriver',

    capabilities: {
        browserName: 'chrome'
    },

    // TODO: user a virtual host; pizzashop.local
    baseUrl: 'http://localhost:3333',

    framework: 'cucumber',

    specs: [
        '../features/**/*.feature'
    ],

    cucumberOpts: {
        require: __dirname + '/step_definitions',
        format: 'pretty'
    }
};