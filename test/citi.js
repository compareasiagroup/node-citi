'use strict';

var assert = require('assert');
var nock = require('nock');
var Citi = require('../lib/citi');
var VERSION = require('../package.json').version;

describe('Citi', function() {
  describe('Constructor', function() {
    var defaults = {};
    before(function() {
      defaults = {
        appSecret: null,
        clientId: null,
        request_options: {
          headers: {
            'Accept': '*/*',
            'User-Agent': 'node-citi/' + VERSION
          }
        }
      };
    });

    it('create new instance', function() {
      var client = new Citi();
      assert(client instanceof Citi);
    });

    it('auto constructs', function(){
      var client = Citi();
      assert(client instanceof Citi);
    });

    it('has default options', function() {
      var client = new Citi();
      assert.deepEqual(
        Object.keys(defaults),
        Object.keys(client.options)
      );
    });

    it('accepts and overrides options', function() {
      var options = {
        appSecret: 'abc123',
        extraOption: 'foo',
        request_options: {
          headers: {
            'Accept': 'application/json'
          }
        }
      };

      var client = new Citi(options);

      assert(client.options.hasOwnProperty('extraOption'));
      assert.equal(client.options.extraOption, options.extraOption);

      assert.equal(client.options.consumer_key, options.consumer_key);

      assert.equal(
        client.options.request_options.headers.Accept,
        options.request_options.headers.Accept);
    });
  });

  //describe()
});
