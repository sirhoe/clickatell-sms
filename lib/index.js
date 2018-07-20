'use strict';

const request = require('request-promise');
const ERRORS = require('./errors');
const smsPath = { host: 'https://api.clickatell.com', path: '/rest/message' };
// default value for pass in options
const defaultOptions = {
    xversion: '1',
    resolveWithFullResponse: true,
    simple: false
};

class Clickatell {
    constructor(apiKey) {
        if (!apiKey)
            throw new Error(ERRORS.API_REQUIRED);
        this.apiKey = apiKey;
    }

    /**
     * Sends sms to lit of numbers
     * @param {Array} numbers
     * @param {string} message
     * @return {Promise} resolves to status of request
     */
    async sendSMS(numbers, message) {
        if (!numbers || numbers.length > 0)
            throw new Error(ERRORS.NUMBERS_REQUIRED);

        return request({
            method: 'post',
            url: smsPath.host + smsPath.path,
            json: true,
            headers: {
                'X-Version': defaultOptions.xversion,
                Authorization: `Bearer ${this.apiKey}`
            },
            body: {
                text: message,
                to: numbers
            },
            resolveWithFullResponse: defaultOptions.resolveWithFullResponse,
            simple: defaultOptions.simple
        });
    }
};

module.exports = Clickatell;


