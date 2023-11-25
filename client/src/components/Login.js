import React, { useState } from 'react';

function Login() {
  // Define state variables for input fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., send a request to your backend
    console.log('Logging in with username:', username, 'and password:', password);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

