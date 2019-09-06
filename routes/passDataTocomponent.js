const express = require('express');
const passData = require('../controllers/passData');

const router = express.Router();

router.get('/', passData.passData);

module.exports = router;
