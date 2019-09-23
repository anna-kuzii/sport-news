const express = require('express');

const registerController = require('../controllers/registerController');
const registerValidation = require('../templates/registrationValidationTemplate');

const router = express.Router();

router.post('/', registerValidation.registrationValidation, registerController.registerController);

module.exports = router;
