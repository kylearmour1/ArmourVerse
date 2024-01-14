
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







import React from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_POSTS_QUERY } from './Mutations'; // Importing query from Mutations.js

function PostFeed() {
  const { loading, error, data } = useQuery(FETCH_POSTS_QUERY);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts!</p>;

  const reversedPosts = [...data.posts].reverse();

  return (
    <div className="post-feed">
      {reversedPosts.map((post) => (
        <div key={post.id} className="post border border-gray-300 rounded p-3 mb-3">
          <p
            dangerouslySetInnerHTML={{
              __html: post.content.replace(
                /(https?:\/\/[^\s]+)/g,
                '<a href="$&" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">$&</a>'
              ),
            }}
          ></p>
          {/* Render other post details here */}
        </div>
      ))}
    </div>
  );
}

export default PostFeed;





