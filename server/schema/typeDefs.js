const { gql } = require('apollo-server-express')



const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    # Add other user fields as necessary
  }

  type Auth {
    token: ID!
    user: User
  }

  # If you don't have any queries yet, either comment out the entire Query type
  # or add a dummy field like below
  type Query {
    dummy: String
  }

#   type Mutation {
#     login(username: String!, password: String!): Auth
#   signup(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
# }
type Mutation {
    login(email: String!, password: String!): Auth
    signup(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
  }

`;
// type Mutation {
//   login(username: String!, password: String!): Auth
//   signup(username: String!, email: String!, password: String!): Auth
// }
// `;

module.exports = typeDefs;
