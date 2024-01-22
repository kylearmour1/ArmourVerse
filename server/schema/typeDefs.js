
// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//   type User {
//     id: ID!
//     username: String!
//     email: String!
//     # Add other user fields as necessary
//   }

//   type Post {
//     id: ID!
//     content: String!
//     author: User!
//     # Add other post fields as necessary
//   }

//   type Auth {
//     token: ID!
//     user: User
//   }

//   type Query {
//     posts: [Post]
//     # Define other queries as neededF[]
//   }

//   type Mutation {
//     login(email: String!, password: String!): Auth
//     signup(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
//     createPost(content: String!): Post
//     deletePost(postId: ID!): Post
    
//   }

// `;

// module.exports = typeDefs;


const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    # // Add other user fields as necessary
  }

  type Post {
    id: ID!
    content: String!
    author: User!
    # // Add other post fields as necessary
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    posts: [Post]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    signup(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
    createPost(content: String!): Post
    deletePost(postId: ID!): Post
    
  }
`;

module.exports = typeDefs;
