const jwt = require('jsonwebtoken');
const userService = require('../services/user.service.js');

const secret = process.env.JWT_SECRET;

const checkIfEmailExists = async (req, res) => {
  const validEmail = await userService.checkEmail(req.body.email);
  if (validEmail) {
    const user = await userService.createUser(req.body);
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
    res.status(201).json({ token });
  } else {
    res.status(409).json({ message: 'User already registered' });
  }
};

module.exports = {
  checkIfEmailExists,
};