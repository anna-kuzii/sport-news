const UserQuery = require('../db/query/UserQuery');
const TokenQuery = require('../db/query/TokenQuery');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const uuid = require("uuid/v4");

require('dotenv').config();

exports.authorization = (req, res) => {

    UserQuery.findUserOne(req.body.email).then(user => {
        if (!user) {
            return res.status(404).json({message: 'Incorrect user ID or password. Try again.'})
        }

        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    _id: user._id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email
                };
                const refreshToken = uuid();
                TokenQuery.createToken(user._id,refreshToken);
                return  jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 200
                    }, (err, token) => {
                    const expire = Math.floor(new Date().getTime() / 1000) + 200;
                        res.json({
                            success: true,
                            accessToken: token,
                            refreshToken: refreshToken,
                            expire: expire,
                        });
                    }
                );
            }
                return res.status(404).json({ message: "Incorrect user ID or password. Try again."})
        })
    })
};