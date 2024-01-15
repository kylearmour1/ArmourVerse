
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

  // Apply the background color style to the text box
  const postStyle = {
    backgroundColor: '#333', // Set the same background color as in App.js
    color: 'white', // Set white text color
  };

  return (
    <div className="post-feed">
      {reversedPosts.map((post) => (
        <div key={post.id} className="post border border-gray-300 rounded p-3 mb-3" style={postStyle}>
         
          
          <p dangerouslySetInnerHTML={{
            __html: post.content.replace(
              /(https?:\/\/[^\s]+)/g,
              '<a href="$&" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline" style="color: white;">$&</a>'
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
