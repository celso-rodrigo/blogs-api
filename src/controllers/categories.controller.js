const categoriesService = require('../services/categories.service');

const saveCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const newCategory = await categoriesService.saveCategory(name);
  res.status(201).json({ id: newCategory.id, name: newCategory.name });
};

const getAllCategories = async (req, res) => {
  const categories = await categoriesService.getAllCategories();
  res.status(200).json(categories);
};

module.exports = {
  saveCategory,
  getAllCategories,
};