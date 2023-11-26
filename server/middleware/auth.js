const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'yourSecretKey'; // Use an environment variable for the secret

// Middleware to generate a token
const generateToken = (user) => {
  return jwt.sign({ data: user }, secret, { expiresIn: '1h' }); // Adjust expiration as needed
};

// Middleware to verify a token
const withAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send('Unauthorized: No token provided');
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send('Unauthorized: Invalid token');
    }
    req.user = decoded.data;
    next();
  });
};

module.exports = { generateToken, withAuth };
