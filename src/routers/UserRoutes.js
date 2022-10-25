const express = require('express');

const router = express.Router();

const middlewares = require('../middlewares/validateSignUp');

const userController = require('../controllers/user.controller');

router.post(
  '/',
  middlewares.validateName,
  middlewares.validateEmail,
  middlewares.validatePassword,
  userController.checkIfEmailExists,
);

module.exports = router;