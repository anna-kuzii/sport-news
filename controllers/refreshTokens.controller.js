const UserQuery = require('../db/query/UserQuery');
const TokenQuery = require('../db/query/TokenQuery');
const jwt = require('jsonwebtoken');
const uuid = require("uuid/v4");

require('dotenv').config();

exports.refreshTokens = (req, res) =>{
    TokenQuery.findTokenOne(req.body.refreshToken).then(token =>{
        UserQuery.findUserOneById(token.userId).then(user =>{
            const payload = {
                _id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
            };
            const refreshToken = uuid();
            TokenQuery.updateToken(req.body.refreshToken,refreshToken);
            return  jwt.sign(payload, process.env.SECRET_KEY, {
                    expiresIn: 2000
                }, (err, token) => {
                    res.json({
                        success: true,
                        token: token,
                        refreshToken: refreshToken
                    });
                }
            );
        })
    })
};