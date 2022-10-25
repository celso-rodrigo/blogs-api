const INVALID_FIELDS = { message: 'Invalid fields' };

const jwt = require('jsonwebtoken');
const loginService = require('../services/login.service.js');

const secret = process.env.JWT_SECRET;

const validateLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await loginService.findWithEmailAndPw(email, password);
  if (user === null) {
    res.status(400).json(INVALID_FIELDS);
  } else {
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
    res.status(200).json({ token });
  }
};

module.exports = {
  validateLogin,
};