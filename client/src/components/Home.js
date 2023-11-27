

// import React from 'react';
// import Header from './Header'; // Import the Header component
// import RequireAuth from './RequireAuth';
// import './Home.css';

// function Home() {
//   return (
//     <div className="home-container">
//       <Header /> {/* Render the Header component */}
//       <main>
//         <p>This is the main content area where posts will be displayed.</p>
//         {/* Additional content */}
//       </main>
//     </div>
//   );
// }

// export default RequireAuth(Home);



import React from 'react';
import Header from './Header'; // Import the Header component

import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Header /> {/* Render the Header component */}
      <main>
        <p>This is the main content area where posts will be displayed.</p>
        {/* Additional content */}
      </main>
    </div>
  );
}

export default Home;