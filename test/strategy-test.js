var vows = require('vows');
var assert = require('assert');
var util = require('util');
var PayPalStrategy = require('passport-paypal/strategy');


vows.describe('PayPalStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new PayPalStrategy({ returnURL: 'https://www.example.com/auth/paypal/return' },
        function() {}
      );
    },
    
    'should be named paypal': function (strategy) {
      assert.equal(strategy.name, 'paypal');
    },
    'should have correct provider URL': function (strategy) {
      assert.equal(strategy._providerURL, 'https://www.paypal.com/webapps/auth/server');
    },
  },
  
}).export(module);
