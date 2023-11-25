



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
// import Login from './components/Login';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//         </header>

//         <Routes>
//           <Route path="/login" element={<Login />} />
//           {/* Define other routes as needed */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Add other routes here. For example, a home route: */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* You can add more routes for different pages */}
      </Routes>
    </Router>
  );
}

export default App;
