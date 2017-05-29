module.exports = {
  attributes: {
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string'
    },
    username: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    bio: {
      type: 'string'
    },
    posts: {
      collection: 'post',
      via: 'user'
    },

    fullName: function (){
      return this.firstName + ' ' + this.lastName;
    }

  }
}
