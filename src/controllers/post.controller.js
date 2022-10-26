const postService = require('../services/post.service');

const CATEGORYID_NOT_FOUND = { message: 'one or more "categoryIds" not found' };

const savePost = async (req, res) => {
  const { body: { title, content, categoryIds }, user: { id } } = req;
  const invalidCategory = await postService.checkCategories(categoryIds);
  if (invalidCategory) return res.status(400).json(CATEGORYID_NOT_FOUND);
  const postObj = { title, content, categoryIds, userId: id };
  const post = await postService.savePost(postObj);
  categoryIds.map(async (categoryId) => 
    postService.savePostCategory(categoryId, post.id));
  res.status(201).json(post);
};

const getAllPosts = async (_req, res) => {
  const allPosts = await postService.getAllPosts();
  res.status(200).json(allPosts);
};

module.exports = {
  savePost,
  getAllPosts,
};