const express = require('express')
const subscription = require('../controllers/subscription')
const cors = require('cors');

const router = express.Router()
router.use(cors());

router.get('/', (req, res) => {
  // TODO render a forgotPassword form
  res.send('it is a forgot password block')
})

router.post('/', subscription.sendSubscriptionEmail)


module.exports = router
