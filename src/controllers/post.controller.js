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

const getPostById = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(404).json({ message: 'Post does not exist' });
  const post = await postService.getPostById(id);
  if (post === null) return res.status(404).json({ message: 'Post does not exist' });
  res.status(200).json(post);
};

module.exports = {
  savePost,
  getAllPosts,
  getPostById,
};