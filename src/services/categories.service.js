const { Category } = require('../models');

const saveCategory = async (name) => {
  const newCategory = await Category.create({ name });
  return newCategory;
};

module.exports = {
  saveCategory,
};