import React from 'react';
import { useQuery, gql } from '@apollo/client';

// GraphQL query to fetch posts
const FETCH_POSTS_QUERY = gql`
  query {
    posts {
      id
      content
      # Add any other fields you need
    }
  }
`;

function PostFeed() {
  const { loading, error, data } = useQuery(FETCH_POSTS_QUERY);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts!</p>;

  return (
    <div className="post-feed">
      {data.posts.map((post) => (
        <div key={post.id} className="post">
          <p>{post.content}</p>
          {/* Render other post details here */}
        </div>
      ))}
    </div>
  );
}

export default PostFeed;
