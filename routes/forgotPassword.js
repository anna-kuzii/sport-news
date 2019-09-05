const express = require('express');
const forgotPassword = require('../controllers/forgotPassword');
const cors = require('cors');

const router = express.Router();

router.use(cors());

router.get('/', (req, res) => {
  // TODO render a forgotPassword form
  res.send('it is a forgot password block');
});

router.post('/', forgotPassword.sendForgotPasswordEmail);


module.exports = router;
