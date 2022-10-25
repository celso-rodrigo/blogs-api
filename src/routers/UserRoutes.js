const express = require('express');

const router = express.Router();

const middlewares = require('../middlewares/validateSignUp');
const auth = require('../auth/validateJWT');
const userController = require('../controllers/user.controller');

router.get('/', auth.validateToken, userController.getAllUsers);
router.post(
  '/',
  middlewares.validateName,
  middlewares.validateEmail,
  middlewares.validatePassword,
  userController.checkIfEmailExists,
);

module.exports = router;