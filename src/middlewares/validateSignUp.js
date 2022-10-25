const validateName = (req, res, next) => {
  const validName = req.body.displayName.length >= 8;
  if (!validName) {
    res.status(400).json({ message: '"displayName" length must be at least 8 characters long' });
  } else {
    next();
  }
};

const validateEmail = (req, res, next) => {
  const validEmail = req.body.email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/);
  if (!validEmail) {
    res.status(400).json({ message: '"email" must be a valid email' });
  } else {
    next();
  }
};

const validatePassword = (req, res, next) => {
  const validPassword = req.body.password.length >= 6;
  if (!validPassword) {
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