const express = require('express');

const router = express.Router();

const middlewares = require('../middlewares/validateSignUp');
const auth = require('../auth/validateJWT');
const userController = require('../controllers/user.controller');

router.get('/', auth.validateToken, userController.getAllUsers);
router.get('/:id', auth.validateToken, userController.getUserById);
router.post(
  '/',
  middlewares.validateName,
  middlewares.validateEmail,
  middlewares.validatePassword,
  userController.checkIfEmailExists,
);
router.delete('/me', auth.validateToken, userController.deleteUsere);

module.exports = router;