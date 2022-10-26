const validateName = (req, res, next) => {
  const { displayName } = req.body;
  console.log(displayName);
  if (!displayName || !displayName.length >= 8) {
    res.status(400).json({ message: '"displayName" length must be at least 8 characters long' });
  } else {
    next();
  }
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email || !email.match(regex)) {
    res.status(400).json({ message: '"email" must be a valid email' });
  } else {
    next();
  }
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password || !password.length >= 6) {
    res.status(400).json({ message: '"password" length must be at least 6 characters long' });
  } else {
    next();
  }
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
};