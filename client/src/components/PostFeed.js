
import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { FETCH_POSTS_QUERY, DELETE_POST_MUTATION } from "./Mutations";

function PostFeed() {
  const { loading, error, data, refetch } = useQuery(FETCH_POSTS_QUERY);
  const [deletePost] = useMutation(DELETE_POST_MUTATION);

  if (loading) return <p>Loading posts...</p>;
  if (error) {
    console.log("Error loading posts:", error);
    return <p>Error loading posts!</p>;
  }

  if (!data || !data.posts) {
    console.log("No posts available");
    return <p>No posts available</p>;
  }

  const reversedPosts = [...data.posts].reverse();

  const handleDelete = async (postId) => {
    try {
      await deletePost({ variables: { postId } });
      refetch();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="post-feed">
      {reversedPosts.map((post) => (
        <div key={post.id} className="post border border-gray-300 rounded p-3 mb-3">
          {post.author ? (
            <p>
              <Link
                to={`/users/${post.author.username}`}
                className="text-whitesmoke font-bold"
              >
                {post.author.username}
              </Link>
            </p>
          ) : (
            <p>Author not available</p>
          )}
          <p className="whitespace-pre-line">{post.content}</p>
          {/* Add code here to display comments if applicable */}
          <button
            onClick={() => handleDelete(post.id)}
            className="delete-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete Post
          </button>
        </div>
      ))}
    </div>
  );
}

export default PostFeed;


// import React from "react";
// import { useQuery, useMutation } from "@apollo/client";
// import { Link } from "react-router-dom";
// import { FETCH_POSTS_QUERY, DELETE_POST_MUTATION } from "./Mutations";

// function PostFeed() {
//   const { loading, error, data, refetch } = useQuery(FETCH_POSTS_QUERY);
//   const [deletePost] = useMutation(DELETE_POST_MUTATION);

//   if (loading) return <p>Loading posts...</p>;
//   if (error) return <p>Error loading posts!</p>;

//   if (!data || !data.posts) return <p>No posts available</p>;

//   const reversedPosts = [...data.posts].reverse();

//   const handleDelete = async (postId) => {
//     try {
//       await deletePost({ variables: { postId } });
//       refetch();
//     } catch (error) {
//       console.error("Error deleting post:", error);
//     }
//   };

//   // Function to detect URLs and return JSX for rendering
//   const renderContentWithLinks = (content) => {
//     // Simple URL detection (for demonstration, consider more robust methods for production)
//     const urlRegex = /(https?:\/\/[^\s]+)/g;
//     return content.split(urlRegex).map((part, index) => {
//       if (part.match(urlRegex)) {
//         // Simple image URL detection based on file extension
//         if (/\.(jpeg|jpg|gif|png)$/.test(part)) {
//           return <img key={index} src={part} alt="Posted content" className="content-image"/>;
//         } else {
//           // Non-image URL
//           return <a key={index} href={part} target="_blank" rel="noopener noreferrer">{part}</a>;
//         }
//       }
//       return part; // Text part
//     });
//   };

//   return (
//     <div className="post-feed">
//       {reversedPosts.map((post) => (
//         <div key={post.id} className="post border border-gray-300 rounded p-3 mb-3">
//           {post.author && (
//             <p>
//               <Link to={`/users/${post.author.username}`} className="text-whitesmoke font-bold">
//                 {post.author.username}
//               </Link>
//             </p>
//           )}
//           <p className="whitespace-pre-line">{renderContentWithLinks(post.content)}</p>
//           <button onClick={() => handleDelete(post.id)} className="delete-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
//             Delete Post
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PostFeed;
