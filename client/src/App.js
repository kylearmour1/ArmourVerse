

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
//       <div className="bg-zinc-900 text-white min-h-screen">
//         <Router>
//           <Routes>
//             <Route path="/users/:username" element={<RequireAuth><UserProfile /></RequireAuth>} />
//             <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
//             <Route path="/" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             {/* Add other routes here */}
//           </Routes>
//         </Router>
//       </div>
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
      <div className="bg-zinc-900 text-white min-h-screen">
        <Router>
          <Routes>
            <Route path="/users/:username" element={<RequireAuth><UserProfile /></RequireAuth>} />
            <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Add other routes here */}
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;

