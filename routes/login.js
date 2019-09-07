const express = require('express');
const authPassport = require('../controllers/auth.controller.passport');
<<<<<<< HEAD
const cors = require('cors');

const router = express.Router();

router.use(cors());
=======

const router = express.Router();

>>>>>>> a03a7b67500232301d14811ffdb12863143d7216

router.get('/', (req, res) => {
  // TODO: connect a login form
  res.send('it is a login block');
});
<<<<<<< HEAD

router.post('/', authPassport.authPassport);
module.exports = router;
=======
>>>>>>> a03a7b67500232301d14811ffdb12863143d7216

router.post('/', authPassport.authPassport);
module.exports = router;
