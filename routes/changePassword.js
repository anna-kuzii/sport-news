const express = require('express');

const { changePassword } = require('../controllers/changePassword');

const router = express.Router();

//TODO: reset password page

router.post('/', changePassword);

module.exports = router;
