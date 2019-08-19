const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
  res.send('it is a forgot password block');
});
module.exports = router;
