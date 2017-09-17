# Passport-PayPal

[Passport](http://passportjs.org/) strategy for authenticating with [PayPal](http://www.paypal.com/)
using OpenID 2.0.

This module lets you authenticate using PayPal in your Node.js applications.
By plugging into Passport, PayPal authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-paypal

## Usage

#### Configure Strategy

The PayPal authentication strategy authenticates users using a PayPal account,
which is also an OpenID 2.0 identifier.  The strategy requires a `verify`
callback, which accepts this identifier and calls `done` providing a user.
Additionally, options can be supplied to specify a return URL and realm.

    passport.use(new PayPalStrategy({
        returnURL: 'http://localhost:3000/auth/paypal/return',
        realm: 'http://localhost:3000/'
      },
      function(identifier, done) {
        User.findByOpenID({ openId: identifier }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'paypal'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/paypal',
      passport.authenticate('paypal'));

    app.get('/auth/paypal/callback', 
      passport.authenticate('paypal', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [signon example](https://github.com/jaredhanson/passport-paypal/tree/master/examples/signon).

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/jaredhanson/passport-paypal.png)](http://travis-ci.org/jaredhanson/passport-paypal)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/vK9dyjRnnWsMzzJTQ57fRJpH/jaredhanson/passport-paypal'>  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/vK9dyjRnnWsMzzJTQ57fRJpH/jaredhanson/passport-paypal.svg' /></a>
