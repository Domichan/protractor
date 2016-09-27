exports.config = {
  framework: 'custom',
  frameworkPath: '../../node_modules/protractor-cucumber-framework',
  seleniumArgs: [],
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  //baseUrl: 'http://192.168.1.108:9001/',
  baseUrl: 'http://localhost:9001/',

  verbose: true,

  specs: ['../tests/delete*.feature'],
  chromeOnly: false,

  multiCapabilities: [
    {
      'browserName': 'firefox'
    }
  ],
  cucumberOpts: {
    format: 'pretty',
    require: ['../tests/step_definitions/*.js',
      'env.js']
  },


  allScriptsTimeout: 30000,


  rootElement: 'body'
};
