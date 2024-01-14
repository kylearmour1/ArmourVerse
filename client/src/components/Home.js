
// import React, { useState } from 'react';
// import Header from './Header';
// import { useNavigate } from 'react-router-dom';
// import { useMutation, gql } from '@apollo/client';
// import PostFeed from './PostFeed';


// // GraphQL query to fetch posts (imported for refetch)
// import { FETCH_POSTS_QUERY } from './PostFeed'; // Make sure to export this query from PostFeed.js

// // GraphQL mutation for creating a post
// const CREATE_POST_MUTATION = gql`
//   mutation CreatePost($content: String!) {
//     createPost(content: $content) {
//       id
//       content
//       # Add any other fields you need
//     }
//   }
// `;

// function Home() {
//   const [postContent, setPostContent] = useState('');
//   const navigate = useNavigate();

//   // Modified useMutation to include refetchQueries
//   const [createPost] = useMutation(CREATE_POST_MUTATION, {
//     refetchQueries: [{ query: FETCH_POSTS_QUERY }],
//     // Optionally, you can use awaitRefetchQueries: true if you want to wait for the query to complete
//   });

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/');
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (postContent.trim() !== '') {
//       console.log('Token:', localStorage.getItem('token'));
//       console.log('Post content:', postContent);

//       try {
//         await createPost({ variables: { content: postContent } });
//         setPostContent(''); // Clear the textarea after submission
//       } catch (error) {
//         console.error('Error creating post:', error);
//         console.log('Error details:', error.message);
//       }
//     }
//   };

//   return (
//     <div className="home-container">
//       <Header />
//       <main className="p-4">
//         <form onSubmit={handleSubmit} className="mb-4">
//           <textarea
//             className="w-full p-2 border border-gray-300 rounded"
//             placeholder="What's on your mind?"
//             value={postContent}
//             onChange={(e) => setPostContent(e.target.value)}
//           ></textarea>
//           <button
//             type="submit"
//             className="mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
//           >
//             Post
//           </button>
//         </form>
//         <button
//           onClick={handleLogout}
//           className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-700"
//         >
//           Logout
//         </button>
//         <PostFeed />
//       </main>
//     </div>
//   );
// }

// export default Home;







import React, { useState } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import PostFeed from './PostFeed';
import { CREATE_POST_MUTATION, FETCH_POSTS_QUERY } from './Mutations'; // Importing mutation and query from Mutations.js

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
      <Header />
      <main className="p-4">
        <form onSubmit={handleSubmit} className="
mb-4">
<textarea
  className="w-full p-2 border border-gray-300 rounded"
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
<button
onClick={handleLogout}
className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-700"
>
Logout
</button>
<PostFeed />
</main>
</div>
);
}

export default Home;
