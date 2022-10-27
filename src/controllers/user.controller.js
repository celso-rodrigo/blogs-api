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

const getAllUsers = async (req, res) => {
  const response = await userService.getAllUsers();
  res.status(200).json(response);
};

const getUserById = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  if (user !== null) return res.status(200).json(user);
  res.status(404).json({ message: 'User does not exist' });
};

const deleteUsere = async (req, res) => {
  await userService.deleteUser(req.user.id);
  res.status(204).end();
};

module.exports = {
  checkIfEmailExists,
  getAllUsers,
  getUserById,
  deleteUsere,
};