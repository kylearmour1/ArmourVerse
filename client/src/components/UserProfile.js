
// import React from "react";
// import { useQuery, useMutation } from "@apollo/client";

// import { FETCH_USER_QUERY } from "./Mutations"; // Import the query for fetching user data

// function UserProfile() {
//   const { loading, error, data, refetch } = useQuery(FETCH_USER_QUERY, {
//     variables: { username: "username_here" }, // Replace "username_here" with the actual username you want to fetch
//   });

//   if (loading) return <p>Loading user data...</p>;
//   if (error) {
//     console.log("Error loading user data:", error);
//     return <p>Error loading user data!</p>;
//   }

//   if (!data || !data.user) {
//     console.log("User data not available");
//     return <p>User data not available</p>;
//   }

//   const user = data.user;

//   return (
//     <div className="user-profile">
//       <h1>User Profile</h1>
//       <p>Username: {user.username}</p>
//       <p>First Name: {user.firstName}</p>
//       <p>Last Name: {user.lastName}</p>
//       <p>Email: {user.email}</p>

//       {/* Add code here to display the user's mutations if applicable */}
//     </div>
//   );
// }

// export default UserProfile;

// client/src/components/UserProfile.js

import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { FETCH_USER_QUERY } from "./Mutations";

function UserProfile() {
  const { username } = useParams();
  const { loading, error, data } = useQuery(FETCH_USER_QUERY, {
    variables: { username },
  });

  if (loading) return <p>Loading user information...</p>;
  if (error) {
    console.log("Error loading user information:", error);
    return <p>Error loading user information!</p>;
  }

  if (!data || !data.user) {
    console.log("User not found");
    return <p>User not found</p>;
  }

  const user = data.user;

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>First Name:</strong> {user.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {user.lastName}
      </p>
      {/* Add any other user information you want to display */}
    </div>
  );
}

export default UserProfile;
