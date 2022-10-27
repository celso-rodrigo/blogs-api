const { BlogPost, Category, PostCategory, User } = require('../models');

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
  const allPosts = await BlogPost.findAll({
    include: { all: true, attributes: { exclude: 'password' } },
  });
  return allPosts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: { all: true, attributes: { exclude: 'password' } },
  });
  return post;
};

const updatePost = async ({ title, content }, id) => {
  const post = await BlogPost.update({ title, content }, { where: { id } });
  return post;
};

module.exports = {
  savePost,
  checkCategories,
  savePostCategory,
  getAllPosts,
  getPostById,
  updatePost,
};