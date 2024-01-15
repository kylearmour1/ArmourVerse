import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation Signup(
    $username: String!
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    signup(
      username: $username
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;
// Add CREATE_POST_MUTATION
export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($content: String!) {
    createPost(content: $content) {
      id
      content
      
      # Add any other fields you need
    }
  }
`;



export const FETCH_POSTS_QUERY = gql`
  query {
    posts {
      id
      content
      
      
  
    }
  }
`;


// export const FETCH_POSTS_QUERY = gql`
//   query {
//     posts {
//       id
//       content
//       author {
//         id
//         username
//         firstName  
//         lastName   
//       }
//     }
//   }
// `;



export const DELETE_POST_MUTATION = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId) {
      id
    }
  }
`;