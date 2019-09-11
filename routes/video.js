const express = require('express');


const router = express.Router();

const videoController =require('../controllers/videoController');


router.get('/', videoController.videoController);

module.exports = router;
