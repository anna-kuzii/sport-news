const express = require('express');
const registerController = require('../controllers/register_controller');

const router = express.Router();

router.get('/', (req, res) => {
  // TODO: render a register form
  res.send('it is a register block');
});


router.post('/', registerController.register_controller);

module.exports = router;
