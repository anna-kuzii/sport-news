const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
  // TODO: connect a login form
  res.send('it is a login block');
});
module.exports = router;
