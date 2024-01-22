






// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import RequireAuth from "./components/RequireAuth";
// import UserProfile from "./components/UserProfile";
// import { ApolloProvider } from "@apollo/client";
// import apolloClient from "./apolloClient";

// function App() {
//   return (
//     <ApolloProvider client={apolloClient}>
//       <Router>
     
//         <Routes>
//           <Route path="/user/:username" element={<RequireAuth><UserProfile /></RequireAuth>} />
//           <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
//           <Route path="/" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           {/* Add other routes here */}
//         </Routes>
       
//       </Router>
//     </ApolloProvider>
//   );
// }

// export default App;




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import RequireAuth from "./components/RequireAuth";
import UserProfile from "./components/UserProfile";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apolloClient";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Routes>
        <Route path="/users/:username" element={<RequireAuth><UserProfile /></RequireAuth>} />
          <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;





// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import RequireAuth from "./components/RequireAuth";
// import UserProfile from "./components/UserProfile"; // Make sure you've imported UserProfile
// import { ApolloProvider } from "@apollo/client";
// import apolloClient from "./apolloClient";

// function App() {
//   return (
//     <ApolloProvider client={apolloClient}>
//       <Router>
//         <Routes>
//           <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
//           <Route path="/" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/userprofile" element={<RequireAuth><UserProfile /></RequireAuth>} />
//           {/* Add other routes here */}
//         </Routes>
//       </Router>
//     </ApolloProvider>
//   );
// }

// export default App;
