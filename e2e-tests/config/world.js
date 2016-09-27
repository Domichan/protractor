var world = (function() {
    var chai = require('chai'),
    chaiAsPromised = require("chai-as-promised");
    chai.use(chaiAsPromised);

    var expect = chai.expect,
        EC = protractor.ExpectedConditions,
        config = require('./protractor.cucumber.conf.js'),
        basicSupport = require('../tests/support/basicSupport');

    return {
        expect: expect,
        EC: EC,
        config: config,
        basicSupport: basicSupport
    }

}());
module.exports = world;