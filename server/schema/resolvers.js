// const { User } = require('../models');
// const jwt = require('jsonwebtoken');

// const resolvers = {
//   Query: {
//     // Define resolvers for any queries you have
//   },
//   Mutation: {
//     // Login Mutation
//     async login(_, { email, password }) {
//       const user = await User.findOne({ email });
//       if (!user) {
//         throw new Error('User not found');
//       }

//       // Removed the additional parameter from isCorrectPassword
//       const validPassword = await user.isCorrectPassword(password);
//       if (!validPassword) {
//         throw new Error('Incorrect password');
//       }

//       // Utilizing the JWT_SECRET from .env for token generation
//       const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
//       return { token, user };
//     },

//     // Signup Mutation
//     async signup(_, { username, email, password, firstName, lastName }) {
//       // Password hashing is handled in the User model's pre-save hook
//       const user = await User.create({ username, email, password, firstName, lastName });
      
//       // Utilizing the JWT_SECRET from .env for token generation
//       const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
//       return { token, user };
//     },
//   },
// };

// module.exports = resolvers;







const { User, Post } = require('../models');
const jwt = require('jsonwebtoken');

const resolvers = {
  Query: {
    // Fetch all posts
    async posts() {
      return await Post.find().populate('author');
    },
    // Add other query resolvers as necessary
  },
  Mutation: {
    // Login Mutation
    async login(_, { email, password }) {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }
      const validPassword = await user.isCorrectPassword(password);
      if (!validPassword) {
        throw new Error('Incorrect password');
      }
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
      return { token, user };
    },

    // Signup Mutation
    async signup(_, { username, email, password, firstName, lastName }) {
      const user = await User.create({ username, email, password, firstName, lastName });
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
      return { token, user };
    },

    // Create Post Mutation
    async createPost(_, { content }, context) {
      if (!context.user) {
        throw new Error("You must be logged in to create a post");
      }
      const newPost = new Post({
        content,
        author: context.user.id,
      });
      return await newPost.save();
    },
  },
  Post: {
    // Populate author field in Post
    author(post) {
      return User.findById(post.author);
    },
  },
};

module.exports = resolvers;
