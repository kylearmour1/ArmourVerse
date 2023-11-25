import React from 'react';
import Post from './Post';

function PostsFeed() {
  // Example posts data (replace with real data)
  const posts = [
    { id: 1, content: 'First post content' },
    { id: 2, content: 'Second post content' }
    // Add more posts
  ];

  return (
    <div className="posts-feed">
      {posts.map(post => (
        <Post key={post.id} content={post.content} />
      ))}
    </div>
  );
}

export default PostsFeed;
