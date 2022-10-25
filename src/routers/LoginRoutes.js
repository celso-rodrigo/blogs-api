const express = require('express');

const router = express.Router();

const middlewares = require('../middlewares/validateLoginInputs');

const loginController = require('../controllers/login.controller');

router.post('/', middlewares.validateEmailAndPw, loginController.validateLogin);

module.exports = router;