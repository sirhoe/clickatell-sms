'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const request = require('request-promise');
const ERRORS = require('../lib/errors');
const sender = require('../index')('key');

describe('Sends sms', async () => {
    beforeEach(() => {
        sinon.spy(request, 'post');
    });
    afterEach(() => {
        request.post.restore();
    });

    it('should throw error when numbers is not an Array or is empt Array', () => {
        const noop = () => { };
        sender.sendSMS(null).then(
            noop,
            err => {
                expect(err).to.be.instanceOf(Error);
                expect(err.message).to.be.equal(ERRORS.NUMBERS_REQUIRED);
            }
        );
        sender.sendSMS(undefined).then(
            noop,
            err => {
                expect(err).to.be.instanceOf(Error);
                expect(err.message).to.be.equal(ERRORS.NUMBERS_REQUIRED);
            }
        );
        sender.sendSMS([]).then(
            noop,
            err => {
                expect(err).to.be.instanceOf(Error);
                expect(err.message).to.be.equal(ERRORS.NUMBERS_REQUIRED);
            }
        );
        sender.sendSMS('+61490989898').then(
            noop,
            err => {
                expect(err).to.be.instanceOf(Error);
                expect(err.message).to.be.equal(ERRORS.NUMBERS_REQUIRED);
            }
        );
    });
});