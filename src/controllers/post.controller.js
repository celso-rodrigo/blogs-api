const postService = require('../services/post.service');

const CATEGORYID_NOT_FOUND = { message: 'one or more "categoryIds" not found' };
const POST_NOT_FOUND = { message: 'Post does not exist' };

const savePost = async (req, res) => {
  const { body: { title, content, categoryIds }, user: { id } } = req;
  const invalidCategory = await postService.checkCategories(categoryIds);
  if (invalidCategory) return res.status(400).json(CATEGORYID_NOT_FOUND);
  const postObj = { title, content, categoryIds, userId: id };
  const post = await postService.savePost(postObj);
  await Promise.all(categoryIds.map(async (categoryId) => 
  postService.savePostCategory(categoryId, post.id)));
  res.status(201).json(post);
};

const getAllPosts = async (_req, res) => {
  const allPosts = await postService.getAllPosts();
  res.status(200).json(allPosts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(404).json(POST_NOT_FOUND);
  const post = await postService.getPostById(id);
  if (post === null) return res.status(404).json(POST_NOT_FOUND);
  res.status(200).json(post);
};

const verifyOwnership = async (req, res, next) => {
  const { id } = req.user;
  const postToUpdate = await postService.getPostById(req.params.id);
  if (postToUpdate === null) return res.status(404).json(POST_NOT_FOUND);
  const postId = postToUpdate.userId;
  if (postId !== id) return res.status(401).json({ message: 'Unauthorized user' });
  next();
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  await postService.updatePost(req.body, id);
  const updatedPost = await postService.getPostById(id);
  res.status(200).json(updatedPost);
};

const deletePost = async (req, res) => {
  await postService.deletePost(req.params.id);
  res.status(204).end();
};

const searchPost = async (req, res, next) => {
  const query = req.query.q;
  if (query === undefined) return next();
  const searchedPosts = await postService.serchByQuery(query);
  res.status(200).json(searchedPosts);
};

module.exports = {
  verifyOwnership,
  savePost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  searchPost,
};