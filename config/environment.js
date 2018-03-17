'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'bit-daily',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
	  'ember-oauth2': {
	    coinbase: {
	      clientId: '43cf58782d825de618c1d4ccaf856012fbb5e3955cc69d7cacdf97a0db42b8b8',
	      authBaseUri: 'https://www.coinbase.com/oauth/authorize',
	      clientSecret: 'edd13b9a0e9a651a8dc9fa214d19a46f983bdc880102e1c5e3dd2ab662b4965f',
		  redirectUri: 'http://127.0.0.1:4200/coinbase',
		  responseType: 'code'
	    }
	},
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
