import React from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_USER_QUERY } from './Mutations';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { username } = useParams(); // Get username from URL parameters
  const { loading, error, data } = useQuery(FETCH_USER_QUERY, {
    variables: { username },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Ensure data and data.user exist
  if (!data || !data.user) {
    console.log('User not found');
    return <p>User not found</p>;
  }

  const user = data.user;

  return (
    <div>
      <h1>{user.username}'s Profile</h1>
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Email: {user.email}</p>
      {/* Display other user details here if needed */}
    </div>
  );
};

export default UserProfile;
