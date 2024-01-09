

// const express = require("express");
// const mongoose = require("mongoose");
// const { ApolloServer } = require("apollo-server-express");
// const dotenv = require("dotenv");
// const cors = require("cors");

// // Importing GraphQL typeDefs and resolvers
// const { typeDefs, resolvers } = require("./schema");

// dotenv.config();

// const PORT = process.env.PORT || 3001;
// const uri = process.env.MONGODB_URI;

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Initialize Apollo Server with GraphQL schema and resolvers
// const apolloServer = new ApolloServer({ typeDefs, resolvers });

// // Connect to MongoDB
// mongoose
//   .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB");

//     // Start Apollo Server
//     apolloServer.start().then(() => {
//       apolloServer.applyMiddleware({ app });

//       // Start Express server
//       app.listen(PORT, () => {
//         console.log(`Server is running on http://localhost:${PORT}`);
//         console.log(`GraphQL path is ${apolloServer.graphqlPath}`);
//       });
//     });
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });

// // Note: REST API routes for posts, comments, users, and auth are removed in this setup.
// // If needed, you can still include them alongside GraphQL.

// module.exports = app;
const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const dotenv = require("dotenv");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { User } = require("./models/index"); // Assuming this is the correct path

// Importing GraphQL typeDefs and resolvers
const { typeDefs, resolvers } = require("./schema");

dotenv.config();

const PORT = process.env.PORT || 3001;
const uri = process.env.MONGODB_URI;

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Apollo Server with GraphQL schema, resolvers, and context setup
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    // Get the token from the request headers
    const token = req.headers.authorization || '';
    if (token) {
      try {
        // Verify the token and retrieve user data
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        return { user };
      } catch (e) {
        console.log("Error decoding token:", e);
      }
    }
    return {}; // Return an empty context if no token is found
  }
});

// Connect to MongoDB and start the server
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");

    apolloServer.start().then(() => {
      apolloServer.applyMiddleware({ app });
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        console.log(`GraphQL path is ${apolloServer.graphqlPath}`);
      });
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = app;
