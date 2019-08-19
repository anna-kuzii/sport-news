const express = require('express');
const registerController = require('../controllers/register_controller');
const registerValidation = require('../templates/registrationValidationTemplate');
const passport = require('../config/passport');

const router = express.Router();

router.get('/', (req, res) => {
  passport.authenticate('local-signup', (err, user) => {
    if (err) return err;
    if (!user) return res.send('This email already registred');
    return registerController.registerController;
  });
});


router.post('/', registerValidation.registrationValidation, registerController.registerController);

module.exports = router;
