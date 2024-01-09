
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'http://localhost:3001/graphql', // Your GraphQL endpoint
});

// Middleware for adding the token to requests
const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authentication token from local storage
  const token = localStorage.getItem('token');

  // Use the setContext method to set the HTTP headers
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : '', // Send the token in the Authorization header
    }
  });

  // Call the next link in the middleware chain
  return forward(operation);
});

// Use the authLink.concat method to combine the authLink and httpLink
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
