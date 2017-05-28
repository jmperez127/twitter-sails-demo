module.exports = {
  attributes: {
    first_name: {
      type: 'string',
      required: true
    },
    last_name: {
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
    posts: { collection: 'Post' },

  }
}
