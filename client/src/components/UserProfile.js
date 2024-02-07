


// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useQuery, useMutation } from "@apollo/client";
// import { FETCH_USER_QUERY, CREATE_POST_MUTATION } from "./Mutations";
// import Header from './Header';

// function UserProfile() {
//   const { username } = useParams();
//   const { loading, error, data } = useQuery(FETCH_USER_QUERY, { variables: { username }});
//   const [createPost, { loading: creatingPost }] = useMutation(CREATE_POST_MUTATION, {
//     // Refetch user's posts or update cache here if necessary
//     refetchQueries: [{ query: FETCH_USER_QUERY, variables: { username } }],
//   });
//   const [postContent, setPostContent] = useState('');

//   const handlePostCreation = async () => {
//     if (!postContent.trim()) return; // Avoid creating empty posts
//     try {
//       await createPost({ variables: { content: postContent } });
//       setPostContent(''); // Clear the textarea after posting
//     } catch (error) {
//       console.error("Error creating post:", error);
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error :(</div>;

//   const { user } = data;

//   return (
//     <div className="bg-zinc-900 min-h-screen">
//       <Header />
//       <div className="p-4">
//         <div className="bg-zinc-800 p-4 rounded-lg shadow-md mx-auto max-w-4xl">
//           {/* User Profile Information */}
//           <div className="flex items-center mb-4">
//             <img
//               src={user.profilePictureUrl || "https://via.placeholder.com/150"}
//               alt="User Profile"
//               className="h-22 w-22 rounded-full object-cover"
//             />
//             <div className="ml-4">
//               <h1 className="text-xl font-semibold text-white">{user.username}</h1>
//               <p className="text-gray-400">{user.email}</p>
//               <p className="text-gray-400">{user.firstName} {user.lastName}</p>
//             </div>
//           </div>

//           {/* Post Creation Form */}
//           <div className="post-creation-form mb-4">
//             <textarea
//               className="w-full p-2 text-black mb-2"
//               value={postContent}
//               onChange={(e) => setPostContent(e.target.value)}
//               placeholder="What's on your mind?"
//             ></textarea>
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               onClick={handlePostCreation}
//               disabled={creatingPost}
//             >
//               Post
//             </button>
//           </div>

//           {/* Optionally, here you can list the user's posts if included in the FETCH_USER_QUERY response */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserProfile;






import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_USER_QUERY, CREATE_POST_MUTATION } from "./Mutations";
import Header from './Header';

function UserProfile() {
  const { username } = useParams();
  const { loading, error, data } = useQuery(FETCH_USER_QUERY, { variables: { username }});
  const [createPost, { loading: creatingPost }] = useMutation(CREATE_POST_MUTATION, {
    refetchQueries: [{ query: FETCH_USER_QUERY, variables: { username } }],
  });
  const [postContent, setPostContent] = useState('');

  const handlePostCreation = async () => {
    if (!postContent.trim()) return; // Avoid creating empty posts
    try {
      await createPost({ variables: { content: postContent } });
      setPostContent(''); // Clear the textarea after posting
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  const { user } = data;

  return (
    <div className="bg-zinc-900 min-h-screen">
      <Header />
      <div className="p-4">
        <div className="bg-zinc-800 p-4 rounded-lg shadow-md mx-auto max-w-4xl">
          {/* User Profile Information */}
          <div className="flex items-center mb-4">
            <img
              src={user.profilePictureUrl || "https://via.placeholder.com/150"}
              alt="User Profile"
              className="h-22 w-22 rounded-full object-cover"
            />
            <div className="ml-4">
              <h1 className="text-xl font-semibold text-white">{user.username}</h1>
              <p className="text-gray-400">{user.email}</p>
              <p className="text-gray-400">{user.firstName} {user.lastName}</p>
            </div>
          </div>

          {/* Post Creation Form */}
          <div className="post-creation-form mb-4">
            <textarea
              className="w-full p-2 text-black mb-2"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="What's on your mind?"
            ></textarea>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handlePostCreation}
              disabled={creatingPost}
            >
              Post
            </button>
          </div>

          {/* Display User's Posts */}
          {user.posts && user.posts.length > 0 ? (
            <div className="user-posts mt-4">
              <h2 className="text-xl font-semibold text-white mb-2">Your Posts</h2>
              {user.posts.map((post) => (
                <div key={post.id} className="post bg-zinc-800 p-4 rounded-lg shadow-md mb-4">
                  <p className="text-gray-400">{post.content}</p>
                  {/* Display post date if needed */}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No posts to show</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
