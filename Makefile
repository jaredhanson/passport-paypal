NODE = node
TEST = ./node_modules/.bin/vows
TESTS ?= test/*-test.js

test:
	@NODE_ENV=test NODE_PATH=lib $(TEST) $(TEST_FLAGS) $(TESTS)

docs: docs/api.html

docs/api.html: lib/passport-paypal/*.js
	dox \
		--title Passport-PayPal \
		--desc "PayPal (OpenID) authentication strategy for Passport" \
		$(shell find lib/passport-paypal/* -type f) > $@

docclean:
	rm -f docs/*.{1,html}

.PHONY: test docs docclean
