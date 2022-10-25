const { User } = require('../models');

const findWithEmailAndPw = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
};

module.exports = {
  findWithEmailAndPw,
};