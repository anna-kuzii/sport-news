const express = require('express');
const authPassport = require('../controllers/auth.controller.passport');

const router = express.Router();


router.post('/', authPassport.authPassport);
module.exports = router;
