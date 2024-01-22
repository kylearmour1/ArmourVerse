



// import React from 'react';
// import { useQuery, useMutation } from '@apollo/client';
// import { FETCH_POSTS_QUERY, DELETE_POST_MUTATION } from './Mutations';
// import { Link } from 'react-router-dom';

// function PostFeed() {
//   const { loading, error, data, refetch } = useQuery(FETCH_POSTS_QUERY);
//   const [deletePost] = useMutation(DELETE_POST_MUTATION);

//   if (loading) return <p>Loading posts...</p>;
//   if (error) {
//     console.log('Error loading posts:', error);
//     return <p>Error loading posts!</p>;
//   }
//   console.log(data.posts);


//   // Ensure data and data.posts exist
//   if (!data || !data.posts) {
//     console.log('No posts available');
//     return <p>No posts available</p>;
//   }

//   const reversedPosts = [...data.posts].reverse();

//   const handleDelete = async (postId) => {
//     try {
//       await deletePost({ variables: { postId } });
//       refetch(); // Refetch posts after deletion
//     } catch (error) {
//       console.error('Error deleting post:', error);
//     }
//   };

//   return (
//     <div className="post-feed">
//       {reversedPosts.map((post) => (
//         <div key={post.id} className="post border border-gray-300 rounded p-3 mb-3">
//           {post.author ? (
//             <Link to={`/user/${post.author.username}`} className="text-blue-700 hover:underline">
//               {post.author.firstName} {post.author.lastName}
//             </Link>
//           ) : (
//             <p>Author not available</p>
//           )}
//           <p dangerouslySetInnerHTML={{
//             __html: post.content.replace(
//               /(https?:\/\/[^\s]+)/g,
//               '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">$1</a>'
//             ),
//           }}></p>
//           <button
//             onClick={() => handleDelete(post.id)}
//             className="delete-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Delete Post
//           </button>
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
  if (error) {
    console.log('Error loading posts:', error);
    return <p>Error loading posts!</p>;
  }

  if (!data || !data.posts) {
    console.log('No posts available');
    return <p>No posts available</p>;
  }

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
          {post.author ? (
            <p className="text-blue-700 hover:underline">{post.author.username}</p>
          ) : (
            <p>Author not available</p>
          )}
          <p dangerouslySetInnerHTML={{
            __html: post.content.replace(
              /(https?:\/\/[^\s]+)/g,
              '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">$1</a>'
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
