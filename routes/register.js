const express = require('express');

const registerController = require('../controllers/register_controller');
const registerValidation = require('../templates/registrationValidationTemplate');

const router = express.Router();

<<<<<<< HEAD
router.use(cors());
=======
>>>>>>> a03a7b67500232301d14811ffdb12863143d7216

router.get('/', (req, res) => {
  res.send('it is a register block');
});


router.post('/', registerValidation.registrationValidation, registerController.registerController);

module.exports = router;
