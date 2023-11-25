import React from 'react';
import NavBar from './NavBar';
import PostsFeed from './PostsFeed';
import Sidebar from './Sidebar';

function Home() {
  return (
    <div>
      <NavBar />
      <div className="main-layout">
        <Sidebar />
        <PostsFeed />
        {/* Add more components or sections as needed */}
      </div>
    </div>
  );
}

export default Home;
