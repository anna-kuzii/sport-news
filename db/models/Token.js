const mongoose = require('mongoose');

const { Schema } = mongoose;

const TokenSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId:{
        type: String,
        required:true,
        unique:true
    },
    refreshToken: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Token = mongoose.model('tokens', TokenSchema);

module.exports = Token;