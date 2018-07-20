'use strict';

const expect = require('chai').expect;
const ERRORS = require('../lib/errors');
const Clickatell = require('../lib/index');

describe('clickatell-sms', function () {
    it(`should thorw \"${ERRORS.API_REQUIRED}\" errro when instantiated without key`, () => {
        expect(require('../index')).to.throw(ERRORS.API_REQUIRED);
    });

    it('should instantiate a new Clickatell Object when required with apiKey', () => {
        const target = require('../index')('key');
        expect(target).to.be.an.instanceOf(Clickatell);
        expect(target).to.be.a('object');
    });
});