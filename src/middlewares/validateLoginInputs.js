const validateEmailAndPw = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: 'Some required fields are missing' });
  } else {
    next();
  }
};

module.exports = {
  validateEmailAndPw,
};