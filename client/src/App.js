
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import RequireAuth from "./components/RequireAuth"; // Import RequireAuth
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apolloClient";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
           
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Add other routes here */}
          </Routes>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;



