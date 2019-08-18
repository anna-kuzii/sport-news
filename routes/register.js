const express = require('express');
const { check } = require('express-validator');
const cors = require('cors');

const registerController = require('../controllers/register_controller');
const registerValidation = require('../templates/registrationValidationTemplate');

const router = express.Router();
router.use(cors());

router.get('/', (req, res) => {
  // TODO: render a register form
  res.send('it is a register block');
});


router.post('/', registerValidation.registrationValidation, registerController.registerController);

module.exports = router;
