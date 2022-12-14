const express = require('express');

const router = express.Router();

const auth = require('../auth/validateJWT');

const categoriesController = require('../controllers/categories.controller');

router.get('/', auth.validateToken, categoriesController.getAllCategories);
router.post('/', auth.validateToken, categoriesController.saveCategory);

module.exports = router;