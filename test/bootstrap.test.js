var sails = require('sails');

before(function(done) {

  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(5000);
  process.env.NODE_ENV = 'test';

  sails.lift({
    log: {
      level: "error"
    },
    models: {
      connection: 'localDiskDb',
      migrate: 'drop'
    }
    // configuration for testing purposes
  }, function(err) {
    if (err) return done(err);
    // here you can load fixtures, etc.
    if (sails) {
      //-- load factory definition files from test/factories
    }
    done(err, sails);
  });
});

after(function(done) {
  // here you can clear fixtures, etc.
  sails.lower(done);
});
