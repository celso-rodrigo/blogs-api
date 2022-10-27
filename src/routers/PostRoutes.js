const express = require('express');

const router = express.Router();

const auth = require('../auth/validateJWT');
const postController = require('../controllers/post.controller');
const middlewares = require('../middlewares/validatePostInputs');

router.get('/', auth.validateToken, postController.getAllPosts);
router.get('/:id', auth.validateToken, postController.getPostById);
router.put(
  '/:id',
  auth.validateToken,
  middlewares.validatePostInputs,
  postController.verifyOwnership,
  postController.updatePost,
);
router.post(
  '/',
  auth.validateToken,
  middlewares.validatePostInputs,
  middlewares.validatePostCategory,
  postController.savePost,
);
router.delete(
  '/:id',
  auth.validateToken,
  postController.verifyOwnership,
  postController.deletePost,
);

module.exports = router;