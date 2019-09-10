const VideoQuery = require('../db/query/videoQuery');

exports.videoController = (req, res) => {
  VideoQuery.getAllVideos().then(video=> {
    res.send(video);
  });
};
