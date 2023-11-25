// const { Schema, model } = require("mongoose");


// const commentSchema = new Schema({
//   commentText: {
//     type: String,
//     unique: true,
//     minLength: 1,
//     maxLength: 280,
//     trim: true,
//   },
  
//   postDate: {
//     type: Date,
//     default: Date.now,
//     get: (timestamp) => dateFormat(timestamp),
//   },
// });

// const Comment = model("Comment", commentSchema);

// module.exports = Comment;
const { Schema, model } = require("mongoose");
// If you're using dateFormat, make sure to import it correctly
// const dateFormat = require("../utils/dateFormat");

const commentSchema = new Schema({
  commentText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
    trim: true,
  },
  // Change this to 'post' if comments are for blog posts
  video: {
    type: Schema.Types.ObjectId,
    ref: "Video",
  },
  postDate: {
    type: Date,
    default: Date.now,
    // Uncomment and use if dateFormat is correctly set up
    // get: (timestamp) => dateFormat(timestamp),
  },
  // Add author field if comments are linked to users
  // author: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // }
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
