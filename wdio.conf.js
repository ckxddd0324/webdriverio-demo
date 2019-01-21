// exports.config = {
//     //
//     // ==================
//     // Specify Test Files
//     // ==================
//     // Define which test specs should run. The pattern is relative to the
//     // directory from which `wdio` was called. Notice that, if you are calling
//     // `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script)
//     // then the current working directory is where your package.json resides, so
//     // `wdio` will be called from there.
//     //
//     specs: [
//         './src/features/**/*.feature',
//     ],
//     // Patterns to exclude.
//     exclude: [
//         // 'path/to/excluded/files'
//     ],
//     //
//     // ============
//     // Capabilities
//     // ============
//     // Define your capabilities here. WebdriverIO can run multiple capabilities
//     // at the same time. Depending on the number of capabilities, WebdriverIO
//     // launches several test sessions. Within your capabilities you can
//     // overwrite the spec and exclude options in order to group specific specs
//     // to a specific capability.
//     //
//     // First, you can define how many instances should be started at the same
//     // time. Let's say you have 3 different capabilities (Chrome, Firefox, and
//     // Safari) and you have set maxInstances to 1; wdio will spawn 3 processes.
//     // Therefore, if you have 10 spec files and you set maxInstances to 10, all
//     // spec files will get tested at the same time and 30 processes will get
//     // spawned. The property handles how many capabilities from the same test
//     // should run tests.
//     //
//     maxInstances: 5,
//     //
//     // If you have trouble getting all important capabilities together, check
//     // out the Sauce Labs platform configurator - a great tool to configure your
//     // capabilities: https://docs.saucelabs.com/reference/platforms-configurator
//     //
//     capabilities: [{
//         // maxInstances can get overwritten per capability. So if you have an
//         // in-house Selenium grid with only 5 firefox instance available you can
//         // make sure that not more than 5 instance gets started at a time.
//         maxInstances: 5,
//         //
//         browserName: 'chrome',
//     }],
//     //
//     // ===================
//     // Test Configurations
//     // ===================
//     // Define all options that are relevant for the WebdriverIO instance here
//     //
//     // By default WebdriverIO commands are executed in a synchronous way using
//     // the wdio-sync package. If you still want to run your tests in an async
//     // way e.g. using promises you can set the sync option to false.
//     sync: true,
//     //
//     // Level of logging verbosity: silent | verbose | command | data | result |
//     // error
//     logLevel: 'error',
//     //
//     // Enables colors for log output.
//     coloredLogs: true,
//     //
//     // Saves a screenshot to a given path if a command fails.
//     screenshotPath: './errorShots/',
//     //
//     // Set a base URL in order to shorten url command calls. If your url
//     // parameter starts with "/", then the base url gets prepended.
//     baseUrl: 'http://localhost:8080',
//     //
//     // Default timeout for all waitFor* commands.
//     waitforTimeout: 10000,
//     //
//     // Default timeout in milliseconds for request
//     // if Selenium Grid doesn't send response
//     connectionRetryTimeout: 90000,
//     //
//     // Default request retries count
//     connectionRetryCount: 3,
//     //
//     // Initialize the browser instance with a WebdriverIO plugin. The object
//     // should have the plugin name as key and the desired plugin options as
//     // properties. Make sure you have the plugin installed before running any
//     // tests. The following plugins are currently available:
//     // WebdriverCSS: https://github.com/webdriverio/webdrivercss
//     // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
//     // Browserevent: https://github.com/webdriverio/browserevent
//     // plugins: {
//     //     webdrivercss: {
//     //         screenshotRoot: 'my-shots',
//     //         failedComparisonsRoot: 'diffs',
//     //         misMatchTolerance: 0.05,
//     //         screenWidth: [320,480,640,1024]
//     //     },
//     //     webdriverrtc: {},
//     //     browserevent: {}
//     // },
//     //
//     // Test runner services
//     // Services take over a specific job you don't want to take care of. They
//     // enhance your test setup with almost no effort. Unlike plugins, they don't
//     // add new commands. Instead, they hook themselves up into the test process.
//     services: ['selenium-standalone'],
//     //
//     // Framework you want to run your specs with.
//     // The following are supported: Mocha, Jasmine, and Cucumber
//     // see also: http://webdriver.io/guide/testrunner/frameworks.html
//     //
//     // Make sure you have the wdio adapter package for the specific framework
//     // installed before running any tests.
//     framework: 'cucumber',
//     //
//     // Test reporter for stdout.
//     // The only one supported by default is 'dot'
//     // see also: http://webdriver.io/guide/testrunner/reporters.html
//     reporters: ['spec'],
//     //
//     // If you are using Cucumber you need to specify the location of your step
//     // definitions
//     //
//     // =====
//     // Hooks
//     // =====
//     // WebdriverIO provides several hooks you can use to interfere with the test
//     // process in order to enhance it and to build services around it. You can
//     // either apply a single function or an array of methods to it. If one of
//     // them returns with a promise, WebdriverIO will wait until that promise got
//     // resolved to continue.
//     //
//     // Gets executed once before all workers get launched.
//     // onPrepare: function onPrepare(config, capabilities) {
//     // },
//     //
//     // Gets executed before test execution begins. At this point you can access
//     // all global variables, such as `browser`. It is the perfect place to
//     // define custom commands.
//     before: function before() {
//         /**
//          * Setup the Chai assertion framework
//          */
//         const chai = require('chai');

//         global.expect = chai.expect;
//         global.assert = chai.assert;
//         global.should = chai.should();
//     },
//     //
//     // Hook that gets executed before the suite starts
//     // beforeSuite: function beforeSuite(suite) {
//     // },
//     //
//     // Hook that gets executed _before_ a hook within the suite starts (e.g.
//     // runs before calling beforeEach in Mocha)
//     // beforeHook: function beforeHook() {
//     // },
//     //
//     // Hook that gets executed _after_ a hook within the suite starts (e.g. runs
//     // after calling afterEach in Mocha)
//     // afterHook: function afterHook() {
//     // },
//     //
//     // Function to be executed before a test (in Mocha/Jasmine) or a step (in
//     // Cucumber) starts.
//     // beforeTest: function beforeTest(test) {
//     // },
//     //
//     // Runs before a WebdriverIO command gets executed.
//     // beforeCommand: function beforeCommand(commandName, args) {
//     // },
//     //
//     // Runs after a WebdriverIO command gets executed
//     // afterCommand: function afterCommand(commandName, args, result, error) {
//     // },
//     //
//     // Function to be executed after a test (in Mocha/Jasmine) or a step (in
//     // Cucumber) starts.
//     // afterTest: function afterTest(test) {
//     // },
//     //
//     // Hook that gets executed after the suite has ended
//     // afterSuite: function afterSuite(suite) {
//     // },
//     //
//     // Gets executed after all tests are done. You still have access to all
//     // global variables from the test.
//     // after: function after(result, capabilities, specs) {
//     // },
//     //
//     // Gets executed after all workers got shut down and the process is about to
//     // exit. It is not possible to defer the end of the process using a promise.
//     // onComplete: function onComplete(exitCode) {
//     // }
// };
exports.config = {
    
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        'features/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 1,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 5,
        //
        browserName: 'firefox',
        metadata: {
            browser: {
                name: 'firefox',
                version: '63'
            },
            device: 'MacBook Pro 15',
            platform: {
                name: 'OSX',
                version: '10.12.6'
            }
        },
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // By default WebdriverIO commands are executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async way
    // e.g. using promises you can set the sync option to false.
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'verbose',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Warns when a deprecated command is used
    deprecationWarnings: true,
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './errorShots/',
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: `https://www.ebay.com/`,
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Initialize the browser instance with a WebdriverIO plugin. The object should have the
    // plugin name as key and the desired plugin options as properties. Make sure you have
    // the plugin installed before running any tests. The following plugins are currently
    // available:
    // WebdriverCSS: https://github.com/webdriverio/webdrivercss
    // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
    // Browserevent: https://github.com/webdriverio/browserevent
    // plugins: {
    //     webdrivercss: {
    //         //screenshotRoot: 'my-shots',
    //         //failedComparisonsRoot: 'diffs',
    //         //misMatchTolerance: 0.05,
    //         screenWidth: [320,480,640,1024]
    //     },
    //     webdriverrtc: {},
    //     browserevent: {}
    // },
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    //services: ['browserstack'],
    //
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'cucumber',
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: http://webdriver.io/guide/reporters/dot.html
    reporters: ['spec', 
                // 'multiple-cucumber-html', 
                // 'allure'
            ],

    //for multiple-cucumber-html
    reporterOptions: {
        htmlReporter: {
            jsonFolder: './tmp',
            reportFolder: `./tmp/report`,
            // ... other options, see Options
        },
        allure: {
            outputDir: 'allure-results'
        }
    },
    
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    // mochaOpts: {
    //     ui: 'bdd',
    //     timeout: 30000,
    //     compilers: ['js:babel-core/register'],
    // },
    cucumberOpts: {
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> filetype:compiler used for processing required features
        compiler: [
            'js:babel-register',
            'js:babel-core/register'
        ],
        // <boolean< Treat ambiguous definitions as errors
        failAmbiguousDefinitions: true,
        // <boolean> invoke formatters without executing steps
        // dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> Enable this config to treat undefined definitions as
        // warnings
        ignoreUndefinedDefinitions: false,
        // <string[]> ("extension:module") require files with the given
        // EXTENSION after requiring MODULE (repeatable)
        name: [],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <string[]> (file/dir) require files before executing features
        require: [
            './steps/given.js',
            './steps/then.js',
            './steps/when.js',
            // Or search a (sub)folder for JS files with a wildcard
            // works since version 1.1 of the wdio-cucumber-framework
            //'./src/**/*.js',
        ],
        // <string> specify a custom snippet syntax
        snippetSyntax: undefined,
        // <boolean> fail if there are any undefined or pending steps
        strict: true,
        // <string> (expression) only execute the features or scenarios with
        // tags matching the expression, see
        // https://docs.cucumber.io/tag-expressions/
        tagExpression: 'not @Pending',
        // <boolean> add cucumber tags to feature or scenario name
        tagsInTitle: false,
        // <number> timeout for step definitions
        timeout: 60000,
    },
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    before: function (capabilities, specs) {
        require('babel-register');
        var chai = require('chai');
        global.expect = chai.expect;
        chai.Should();
        require('dotenv').config();

        // browser.windowHandleSize({
        //     width: 500,
        //     height: 800}
        // );
    },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    beforeSuite: function (suite) {
        // set width
        // browser.setViewportSize({
        //     width: 500,
        //     height: 800}, 
        //     true
        // );
        browser.windowHandleSize({
            width: 500,
            height: 800}
        );
    },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    beforeTest: function (test) {
        //browser.reload();
        browser.windowHandleSize({
            width: 500,
            height: 800}
        );
    },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function () {
    //     browser.reload();
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite ends (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function () {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) ends.
     * @param {Object} test test details
     */
    // afterTest: function (test) {
    // },
    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onComplete: function(exitCode, config, capabilities) {
    // }
}
