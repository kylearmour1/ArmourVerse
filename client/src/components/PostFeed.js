


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
              <Link to={`/users/${post.author.username}`} className="text-blue-700 hover:underline">
                {post.author.username}
              </Link>
            </p>
          ) : (
            <p>Author not available</p>
          )}
          <p>{post.content}</p>
          {/* Add code here to display comments if applicable */}
          <button onClick={() => handleDelete(post.id)} className="delete-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Delete Post
          </button>
        </div>
      ))}
    </div>
  );
}

export default PostFeed;
