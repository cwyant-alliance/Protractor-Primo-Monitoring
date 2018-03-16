exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['specs/pbo.js'],
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        displayStacktrace: true,
        displaySpecDuration: true
    },
    onPrepare: function() {
        browser.manage().window().maximize();
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'testresults',
            filePrefix: 'pbo'
        }));

        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'spec'
        }));
    },
    multiCapabilities: [{
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
            args: [
                '--headless',
                '--no-sandbox',
                '--disable-infobars',
                '--disable-extensions',
                'verbose'
            ],
            prefs: {
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }
    }]
};
