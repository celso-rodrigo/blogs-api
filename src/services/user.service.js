const { User } = require('../models');

const checkEmail = async (email) => {
  const validEmail = await User.findOne({ where: { email } });
  return validEmail === null;
};

const createUser = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

module.exports = {
  checkEmail,
  createUser,
};