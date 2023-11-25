const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // Additional fields like date, comments, etc.
});

const Post = model('Post', postSchema);

module.exports = Post;
