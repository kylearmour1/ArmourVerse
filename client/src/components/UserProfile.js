

// import React from "react";
// import { useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// import { FETCH_USER_QUERY } from "./Mutations";

// function UserProfile() {
//   const { username } = useParams();
  
//   // Execute the GraphQL query
//   const { loading, error, data } = useQuery(FETCH_USER_QUERY, {
//     variables: { username },
//   });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   // Destructuring data from the query response
//   const { user } = data;

//   return (
//     <div className="user-profile">
//       <h1>User Profile</h1>
//       <p>
//         <strong>Username:</strong> {user.username}
//       </p>
//       <p>
//         <strong>Email:</strong> {user.email}
//       </p>
      
      
//       {/* Add any other user information you want to display */}
//     </div>
//   );
// }

// export default UserProfile;


import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { FETCH_USER_QUERY } from "./Mutations";

function UserProfile() {
  const { username } = useParams();
  
  // Execute the GraphQL query
  const { loading, error, data } = useQuery(FETCH_USER_QUERY, {
    variables: { username },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // Destructuring data from the query response
  const { user } = data;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="User Profile"
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="ml-4">
          <h1 className="text-2xl font-semibold">{user.username}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      
      {/* Add any other user information you want to display */}
    </div>
  );
}

export default UserProfile;
