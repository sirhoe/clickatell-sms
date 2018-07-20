Master: [![Build Status](https://travis-ci.org/sirhoe/clickatell-sms.svg?branch=master)](https://travis-ci.org/sirhoe/clickatell-sms) [![Coverage Status](https://coveralls.io/repos/github/sirhoe/clickatell-sms/badge.svg?branch=master)](https://coveralls.io/github/sirhoe/clickatell-sms?branch=master)

This library allows access to the [Clickatell's](http://www.clickatell.com) SMS API's.

## Installation

This library is managed by the **Node Package Manager**

`npm install clickatell-sms`

## Usage

All calls are asynchronous and returns a Promise

```javascript

const clickatell = require('clickatell-sms')(apiKey);

const result = await clickatell.sendMessage(["00000000000"], "My Message");


```

## Testing

To run the library test suite just execute `npm test` from the library root. Please make sure all tests are passing before pushing back any changes.