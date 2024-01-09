const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  content: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User', // References the User model
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Add additional fields as needed, e.g., likes, comments
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
