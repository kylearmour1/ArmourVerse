


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import { ApolloProvider } from "@apollo/client";
// import apolloClient from "./apolloClient";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import Button from '@mui/material/Button';

// function App() {
//   // State to track the current theme mode (light or dark)
//   const [themeMode, setThemeMode] = useState('light'); // Default to light mode

//   // Create light and dark themes
//   const lightTheme = createTheme(); // Default theme (light)
//   const darkTheme = createTheme({
//     palette: {
//       mode: 'dark',
//     },
//   });

//   // Function to toggle the theme
//   const toggleTheme = () => {
//     if (themeMode === 'light') {
//       setThemeMode('dark');
//     } else {
//       setThemeMode('light');
//     }
//   };

//   // Determine which theme to use based on the theme mode state
//   const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;

//   return (
//     <ApolloProvider client={apolloClient}>
//       <ThemeProvider theme={currentTheme}>
//         <CssBaseline />
//         <Router>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             {/* Add other routes here. For example, a home route: */}
//             {/* <Route path="/" element={<Home />} /> */}
//             {/* You can add more routes for different pages */}
//           </Routes>
//         </Router>
//         {/* Add a button to toggle between light and dark themes */}
//         <Button onClick={toggleTheme}>
//           Toggle Dark Mode
//         </Button>
//       </ThemeProvider>
//     </ApolloProvider>
//   );
// }

// export default App;




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



