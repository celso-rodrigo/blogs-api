const MISSING_FIELDS = { message: 'Some required fields are missing' };

const validatePostInputs = (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).json(MISSING_FIELDS);
  next();
};

const validatePostCategory = (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) return res.status(400).json(MISSING_FIELDS);
  next();
};

module.exports = { validatePostInputs, validatePostCategory };