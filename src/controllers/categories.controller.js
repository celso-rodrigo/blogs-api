const categoriesService = require('../services/categories.service');

const saveCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const newCategory = await categoriesService.saveCategory(name);
  res.status(201).json({ id: newCategory.id, name: newCategory.name });
};

module.exports = {
  saveCategory,
};