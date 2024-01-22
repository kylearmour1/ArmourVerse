const { User, Post } = require("../models");
const jwt = require("jsonwebtoken");

const resolvers = {
  Query: {
    // Fetch all posts
    async posts() {
      const posts = await Post.find().populate("author");
      console.log(posts); // Log the fetched posts
      return posts;
    },
    // Add other query resolvers as necessary
    // async user(_, { username }) {
    //   try {
    //     const user = await User.findOne({ username });
    //     if (!user) {
    //       throw new Error('User not found');
    //     }
    //     return user;
    //   } catch (error) {
    //     // Log the error or handle it as needed
    //     console.error('Error fetching user:', error);
    //     throw error; // Re-throw the error to be handled by GraphQL
    //   }
    // }
    async user(_, { username }) {
      console.log("Fetching user with username:", username); // Log the received username
      try {
        const user = await User.findOne({ username });
        console.log("User found:", user); // Log the found user

        if (!user) {
          throw new Error('User not found');
        }
        return user;
      } catch (error) {
        console.error('Error fetching user:', error); // Log any errors
        throw error;
      }
    }
    
  },
  Mutation: {
    //delete mutation

    async deletePost(_, { postId }, context) {
      // Optional: Check if the user is logged in
      if (!context.user) {
        throw new Error("You must be logged in to delete a post");
      }

      // Optional: Check if the user is the author of the post
      const post = await Post.findById(postId);
      if (!post) {
        throw new Error("Post not found");
      }
      if (post.author.toString() !== context.user.id) {
        throw new Error("You do not have permission to delete this post");
      }

      await Post.findByIdAndDelete(postId);
      return post;
    },

    // Login Mutation
    async login(_, { email, password }) {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }
      const validPassword = await user.isCorrectPassword(password);
      if (!validPassword) {
        throw new Error("Incorrect password");
      }
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });
      return { token, user };
    },

    // Signup Mutation
    async signup(_, { username, email, password, firstName, lastName }) {
      const user = await User.create({
        username,
        email,
        password,
        firstName,
        lastName,
      });
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });
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
    author(post) {
      // Check if 'post.author' is already populated
      if (post.author && typeof post.author === 'object') {
        // If it's an object, it means it's already populated, so just return it
        return post.author;
      } else {
        // If not, it's likely an ID, so fetch the user
        return User.findById(post.author);
      }
    },
  },
  
  
};

module.exports = resolvers;
