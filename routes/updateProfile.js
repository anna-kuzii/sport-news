const express = require('express');
const update = require('../controllers/updateProfile');

const router = express.Router();

router.post('/', update.updateProfile);


module.exports = router;
