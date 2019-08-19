const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
  // TODO: render a logout form 
  res.send('it is a logout block');
});
module.exports = router;
