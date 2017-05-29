var factory = require('sails-factory');
var model = require('./../../api/models/User');


module.exports = function (opts) {

  var def = factory.define('user');
  Object.keys(model.attributes).map(function (name, type) {
    if (typeof model.attributes[name] !== 'function')
      def.attr(name, opts[name])
  });

  return factory.create('user', function (user) {});
}
