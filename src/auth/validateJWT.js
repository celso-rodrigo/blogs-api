const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

require('dotenv/config');

const secret = process.env.JWT_SECRET;

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const decoded = jwt.verify(token, secret);
    const user = await userService.getUserById(decoded.data.userId);
    if (!user) {
      return res.status(401).json({ message: 'Error trying to find token\'s user id.' });
    }
    req.user = user;
    console.log(req.user);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateToken };