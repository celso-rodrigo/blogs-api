const { Category } = require('../models');

const saveCategory = async (name) => {
  const newCategory = await Category.create({ name });
  return newCategory;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  saveCategory,
  getAllCategories,
};