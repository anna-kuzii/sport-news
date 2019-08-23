const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router()
router.get('/', (req, res) => {
  // TODO: connect a login form
  res.send('it is a login block')
})

router.post('/',authController.authorization);
module.exports = router;

