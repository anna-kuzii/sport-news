const express = require('express');

const registerController = require('../controllers/register_controller');
const registerValidation = require('../templates/registrationValidationTemplate');

const router = express.Router();

router.post('/', registerValidation.registrationValidation, registerController.registerController);

module.exports = router;
