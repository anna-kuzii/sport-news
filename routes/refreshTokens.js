const express = require('express');
const refreshTokenController = require('../controllers/refreshTokens.controller');
const cors = require('cors');

const router = express.Router();
router.use(cors());

router.post('/',refreshTokenController.refreshTokens);
module.exports = router;