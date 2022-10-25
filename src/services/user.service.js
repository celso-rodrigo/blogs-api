const { User } = require('../models');

const checkEmail = async (email) => {
  const validEmail = await User.findOne({ where: { email } });
  return validEmail === null;
};

const createUser = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: id });
  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return users;
};

module.exports = {
  checkEmail,
  createUser,
  getUserById,
  getAllUsers,
};