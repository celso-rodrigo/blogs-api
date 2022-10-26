const { BlogPost, Category, PostCategory } = require('../models');

const savePost = async (postObj) => {
  const post = await BlogPost.create(postObj);
  return post;
};

const checkCategories = async (idArr) => {
  const foundCategories = await Promise.all(idArr.map((id) => Category.findByPk(id)));
  return !foundCategories.every((category) => category !== null);
};

const savePostCategory = async (categoryId, postId) => {
  await PostCategory.create({ categoryId, postId });
};

const getAllPosts = async () => {
  const allPosts = await PostCategory.findAll();
  return allPosts;
};

module.exports = {
  savePost,
  checkCategories,
  savePostCategory,
  getAllPosts,
};