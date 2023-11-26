
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apolloClient";

function App() {
  return (
    <Router>
      <ApolloProvider client={apolloClient}>
        <YourRoutesOrComponents />
      </ApolloProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Add other routes here. For example, a home route: */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* You can add more routes for different pages */}
      </Routes>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        {/* Add other routes here. For example, a home route: */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* You can add more routes for different pages */}
      </Routes>
    </Router>
  );
}

export default App;
