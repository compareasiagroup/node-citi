'use strict';

var extend = require('deep-extend');
var VERSION = require('../package.json').version;


function Citi(options) {
  if (!(this instanceof Citi)) {
    return new Citi(options);
  }

  this.options = extend({
    appSecret: null,
    clientId: null,
    request_options: {
      headers: {
        Accept: '*/*',
        'User-Agent': 'node-citi/' + VERSION
      }
    }
  }, options);
}

module.exports = Citi
