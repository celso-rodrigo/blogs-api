const express = require('express');

const router = express.Router();

const auth = require('../auth/validateJWT');
const postController = require('../controllers/post.controller');
const middlewares = require('../middlewares/validatePostInputs');

router.post(
  '/',
  auth.validateToken,
  middlewares.validatePostInputs,
  postController.savePost,
);
router.get('/', auth.validateToken, postController.getAllPosts);

module.exports = router;