const express = require('express');
const passData = require('../controllers/passData');
const cors = require('cors');

const router = express.Router();

router.use(cors());

router.get('/', passData.passData);

module.exports = router;
