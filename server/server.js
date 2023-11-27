// const express = require("express");
// const mongoose = require("mongoose"); // Import mongoose
// const dotenv = require("dotenv"); // Import dotenv for environment variables
// const postRoutes = require('./routes/postRoutes'); // Import routes for posts
// const commentRoutes = require('./routes/commentRoutes'); // Import routes for comments
// const cors = require('cors'); // Import CORS to handle cross-origin requests
// const authRoutes = require('./routes/auth')

// dotenv.config(); // Initialize dotenv to use environment variables

// const PORT = process.env.PORT || 3001; // Define the port to use
// const uri = process.env.MONGODB_URI; // Define the MongoDB URI

// const app = express(); // Initialize express app
// const userRoutes = require('./routes/userRoutes')
// app.use(cors()); // Use CORS middleware
// app.use(express.json()); // Use express.json middleware to parse JSON payloads

// // Setup API routes
// app.use('/api/posts', postRoutes);
// app.use('/api/comments', commentRoutes);
// app.use('/api/users', userRoutes)
// app.use('/auth', authRoutes)

// // Connect to MongoDB and start the server
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }) // Connect to MongoDB
//     .then(() => {
//         console.log("Connected to MongoDB"); // Log success message on successful connection
//         // Start listening on the defined PORT only after successful MongoDB connection
//         app.listen(PORT, () => {
//             console.log(`API server running on port ${PORT}!`);
//         });
//     })
//     .catch((error) => {
//         // Log any errors that occur during connection
//         console.error("Error connecting to MongoDB:", error);
//     });

const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const dotenv = require("dotenv");
const cors = require("cors");

// Importing GraphQL typeDefs and resolvers
const { typeDefs, resolvers } = require("./schema");

dotenv.config();

const PORT = process.env.PORT || 3001;
const uri = process.env.MONGODB_URI;

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Apollo Server with GraphQL schema and resolvers
const apolloServer = new ApolloServer({ typeDefs, resolvers });

// Connect to MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");

    // Start Apollo Server
    apolloServer.start().then(() => {
      apolloServer.applyMiddleware({ app });

      // Start Express server
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        console.log(`GraphQL path is ${apolloServer.graphqlPath}`);
      });
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Note: REST API routes for posts, comments, users, and auth are removed in this setup.
// If needed, you can still include them alongside GraphQL.

module.exports = app;
