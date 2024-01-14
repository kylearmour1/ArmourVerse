
// import React from 'react';
// import { useQuery, gql } from '@apollo/client';
// // import { FETCH_POSTS_QUERY } from './Mutations'
// // GraphQL query to fetch posts
// export const FETCH_POSTS_QUERY = gql`
//   query {
//     posts {
//       id
//       content
//       # Add any other fields you need
//     }
//   }
// `;

// function PostFeed() {
//   const { loading, error, data } = useQuery(FETCH_POSTS_QUERY);

//   if (loading) return <p>Loading posts...</p>;
//   if (error) return <p>Error loading posts!</p>;

//   // Reverse the order of data.posts to show newest comments at the top
//   const reversedPosts = [...data.posts].reverse();

//   return (
//     <div className="post-feed">
//       {reversedPosts.map((post) => (
//         <div key={post.id} className="post border border-gray-300 rounded p-3 mb-3">
//           <p
//             dangerouslySetInnerHTML={{
//               __html: post.content.replace(
//                 /(https?:\/\/[^\s]+)/g,
//                 '<a href="$&" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">$&</a>'
//               ),
//             }}
//           ></p>
//           {/* Render other post details here */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PostFeed;







// import React from 'react';
// import { useQuery } from '@apollo/client';
// import { FETCH_POSTS_QUERY, } from './Mutations'; // Importing query from Mutations.js


// function PostFeed() {
//   const { loading, error, data } = useQuery(FETCH_POSTS_QUERY);

//   if (loading) return <p>Loading posts...</p>;
//   if (error) return <p>Error loading posts!</p>;

//   const reversedPosts = [...data.posts].reverse();

//   return (
//     <div className="post-feed">
//       {reversedPosts.map((post) => (
//         <div key={post.id} className="post border border-gray-300 rounded p-3 mb-3">
//           <p
//             dangerouslySetInnerHTML={{
//               __html: post.content.replace(
//                 /(https?:\/\/[^\s]+)/g,
//                 '<a href="$&" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">$&</a>'
//               ),
//             }}
//           ></p>
//           {/* Render other post details here */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PostFeed;


import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { FETCH_POSTS_QUERY, DELETE_POST_MUTATION } from './Mutations';

function PostFeed() {
  const { loading, error, data, refetch } = useQuery(FETCH_POSTS_QUERY);
  const [deletePost] = useMutation(DELETE_POST_MUTATION);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts!</p>;

  const reversedPosts = [...data.posts].reverse();

  const handleDelete = async (postId) => {
    try {
      await deletePost({ variables: { postId } });
      refetch(); // Refetch posts after deletion
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="post-feed">
      {reversedPosts.map((post) => (
        <div key={post.id} className="post border border-gray-300 rounded p-3 mb-3">
          <p dangerouslySetInnerHTML={{
            __html: post.content.replace(
              /(https?:\/\/[^\s]+)/g,
              '<a href="$&" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">$&</a>'
            ),
          }}></p>
          <button
            onClick={() => handleDelete(post.id)}
            className="delete-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete Post
          </button>
          {/* Render other post details here */}
        </div>
      ))}
    </div>
  );
}

export default PostFeed;
