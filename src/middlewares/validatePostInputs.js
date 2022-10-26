const MISSING_FIELDS = { message: 'Some required fields are missing' };

const validatePostInputs = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) return res.status(400).json(MISSING_FIELDS);
  next();
};

module.exports = { validatePostInputs };