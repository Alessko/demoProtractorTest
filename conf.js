/**
 * Created by o.iusko on 04/07/2016.
 */

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/mainPageViewTests.js', './tests/addNewComputerViewTests.js',
        './tests/addNewComputerTests.js', './tests/addNewComputerAndCancelTests.js',
        './tests/addNewComputerWithoutName.js'],
    //specs: ['./tests/addNewComputerWithoutName.js'],
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'http://computer-database.herokuapp.com',

    onPrepare: function(){
        global.isAngularSite = function(flag){
            browser.ignoreSynchronization = !flag;
        };
        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            consolidate: true,
            consolidateAll: true,
            //savePath: 'Reports',
            //screenshotsFolder: '',
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailure: true,
            fixedScreenshotName: true,
            filePrefix: 'testReport'
        }));
    },

    // jasmineNodeOpts: {
    //   showColors: true,
    // }
};