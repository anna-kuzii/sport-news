const Video = require('../models/Video');

exports.getAllVideos = () => Video.find();
