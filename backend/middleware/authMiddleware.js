// middleware/auth.js
const jwt = require('jsonwebtoken');
const secretKey = 'yourSecretKey';

const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(401).send({ error: 'No token provided' });

  try {
    const decoded = jwt.verify(token.split(" ")[1], secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).send({ error: 'Invalid token' });
  }
};

module.exports = authenticate;
