var assert = require('assert')
var userFactory = require('../../factories/User');

describe('UserModel', function () {

  before(function () {
    var user = userFactory({
      first_name: 'John',
      last_name: 'Doe',
      username: 'johndoe',
      email: 'john@doe.com',
      bio: 'this is my bio'
    });
  })

  describe('#find()', function () {

    it('should check find function', function (done) {

      User.find()
        .then(function (results) {
          assert.equal(results[0].hasOwnProperty('posts'), true)
          assert.equal(results[0].first_name, 'John')
          assert.equal(results[0].last_name, 'Doe')
          assert.equal(results[0].username, 'johndoe')
          assert.equal(results[0].email, 'john@doe.com')
          assert.equal(results[0].bio, 'this is my bio')


          done();
        })
        .catch(done);
    });
  });

});
