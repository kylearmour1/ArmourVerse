
import React, { useState } from 'react';

import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import PostFeed from './PostFeed';
import { CREATE_POST_MUTATION, FETCH_POSTS_QUERY } from './Mutations';

function Home() {
  const [postContent, setPostContent] = useState('');
  const navigate = useNavigate();

  const [createPost] = useMutation(CREATE_POST_MUTATION, {
    refetchQueries: [{ query: FETCH_POSTS_QUERY }],
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (postContent.trim() !== '') {
      try {
        await createPost({ variables: { content: postContent } });
        setPostContent(''); // Clear the textarea after submission
      } catch (error) {
        console.error('Error creating post:', error);
      }
    }
  };

  return (
    <div className="home-container">
      <Header onLogout={handleLogout} />
      <main className="p-4">
        <form onSubmit={handleSubmit} className="mb-4">
          <textarea
            className="w-full p-2 border border-gray-300 rounded text-black"
            placeholder="What's on your mind?"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
          >
            Post
          </button>
        </form>
        <h1></h1>
        <PostFeed />
      </main>
    </div>
  );
}

export default Home;

