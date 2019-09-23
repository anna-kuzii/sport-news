const express = require('express');
const subscription = require('../controllers/subscription');
const cors = require('cors');

const router = express.Router();

router.use(cors());

router.post('/', subscription.sendSubscriptionEmail);


module.exports = router;
