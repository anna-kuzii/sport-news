const express = require('express');
const forgotPassword = require('../controllers/forgotPassword');
<<<<<<< HEAD
const cors = require('cors');

const router = express.Router();

router.use(cors());
=======

const router = express.Router();

>>>>>>> a03a7b67500232301d14811ffdb12863143d7216

router.get('/', (req, res) => {
  // TODO render a forgotPassword form
  res.send('it is a forgot password block');
});

router.post('/', forgotPassword.sendForgotPasswordEmail);


module.exports = router;
