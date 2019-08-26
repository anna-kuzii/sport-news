const mongoose = require('mongoose');
const Token = require('../models/Token');

mongoose.set('useFindAndModify', false);

exports.createToken = (userId, token)=>{
    const newToken = new Token({
        _id: new mongoose.Types.ObjectId().toHexString(),
        userId: userId,
        refreshToken: token,
    });
    return newToken.save();
};

exports.updateToken = (token, newToken) =>{
    Token.findOneAndUpdate({ refreshToken: token},{ $set: { refreshToken: newToken} },err=>{});
};

exports.findTokenOne = (refreshToken) => Token.findOne({ refreshToken });