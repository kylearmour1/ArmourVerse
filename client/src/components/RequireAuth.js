
import React from 'react';
import { useNavigate } from 'react-router-dom';

function RequireAuth({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  React.useEffect(() => {
    if (!token) {
      navigate('/'); // Redirect to login page if not authenticated
    }
  }, [token, navigate]);

  return token ? children : null; // Render children if authenticated
}

export default RequireAuth;
