var factory = require('sails-factory');


function ucFirst(string){
  return string.charAt(0).toUpperCase() + string.slice(1)
}

module.exports = function (modelName, opts) {

  var model = require('./../../api/models/' + ucFirst(modelName));

  var def = factory.define(modelName);
  Object.keys(model.attributes).map(function (name, type) {
    if (typeof model.attributes[name] !== 'function')
      def.attr(name, opts[name])
  });

  return factory.create(modelName, function (post) {});
}
