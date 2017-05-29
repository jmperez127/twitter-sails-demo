var assert = require('assert')
var factoryBuilder = require('../../factories/builder');

describe('UserModel', function () {

  before(function () {
    var user = factoryBuilder('user', {
      firstName: 'John',
      lastName: 'Doe',
      username: 'johndoe',
      email: 'john@doe.com',
      bio: 'this is my bio'
    });
  })

  describe('#find()', function () {

    it('should check find function', function (done) {

      User.find().then(function (results) {

        var user = results[0];
        assert.equal(user.hasOwnProperty('posts'), true)
        assert.equal(user.firstName, 'John')
        assert.equal(user.lastName, 'Doe')
        assert.equal(user.username, 'johndoe')
        assert.equal(user.email, 'john@doe.com')
        assert.equal(user.bio, 'this is my bio')

        assert.equal(user.fullName(), 'John Doe')


        done();
      })
        .catch(done);
    });

    it('should be able to add new posts', function (done) {

      User.findOne({email: 'john@doe.com'}).then(function (user) {
        post = Post.create({
          message: 'this is my post',
          user: user.id
        }).exec(function (err, record) {
          User.findOne({id: user.id}).populate('posts').exec(function (err, user) {
            assert.equal(user.posts.length, 1);
            done();
          })
        })
      }).catch(done);


    });

  });

});
