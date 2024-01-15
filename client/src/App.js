import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import RequireAuth from "./components/RequireAuth";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apolloClient";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const appStyle = {
    backgroundColor: '#333', // Set a light black background color
    color: 'white', // Set white text color
    minHeight: '100vh', // Ensures the background covers the entire viewport
  };

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <Router>
          <div style={appStyle}> {/* Apply the background color and text color */}
            <Routes>
              <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* Add other routes here */}
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;


