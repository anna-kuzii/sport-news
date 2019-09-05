const express = require('express');
const authPassport = require('../controllers/auth.controller.passport');
const cors = require('cors');

const router = express.Router();

router.use(cors());

router.get('/', (req, res) => {
  // TODO: connect a login form
  res.send('it is a login block');
});

router.post('/', authPassport.authPassport);
module.exports = router;

