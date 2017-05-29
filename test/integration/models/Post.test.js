var assert = require('assert')
var factoryBuilder = require('../../factories/builder');

describe('PostModel', function () {

  before(function () {

    var user = factoryBuilder('user', {
      firstName: 'John',
      lastName: 'Doe',
      username: 'johndoe',
      email: 'john@doe.com',
      bio: 'this is my bio'
    });

    var post = factoryBuilder('post', {
      user: user,
      message: 'This is my first post!'
    });
  })

  describe('#find()', function () {

    it('should check find function', function (done) {

      Post.find() .then(function (results) {

          var post = results[0];
          assert.equal(post.hasOwnProperty('user'), true)
          assert.equal(post.message, 'This is my first post!')

          done();
        })
        .catch(done);
    });
  });

});
