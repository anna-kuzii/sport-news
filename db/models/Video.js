const mongoose = require('mongoose');

const { Schema } = mongoose;

const VideoSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  author: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  videoURL: {
    type: String,
  },

});

const Video = mongoose.model('video', VideoSchema, 'video');

module.exports = Video;
