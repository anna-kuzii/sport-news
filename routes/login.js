const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
  res.send('it is a login block');
});
module.exports = router;
