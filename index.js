"use strict";

const Clickatell = require('./lib');

module.exports = function (apiKey) { return new Clickatell(apiKey) };