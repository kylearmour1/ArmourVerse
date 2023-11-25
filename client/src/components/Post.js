import React from 'react';

function Post({ content }) {
  return (
    <div className="post">
      <p>{content}</p>
      {/* Add more post details like author, comments, and likes */}
    </div>
  );
}

export default Post;
