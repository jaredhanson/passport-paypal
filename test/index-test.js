var vows = require('vows');
var assert = require('assert');
var util = require('util');
var paypal = require('passport-paypal');


vows.describe('passport-paypal').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(paypal.version);
    },
  },
  
}).export(module);
