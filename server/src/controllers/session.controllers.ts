const { compare } = require('../helpers/handleBcrypt')
const { User } = require('../models')
const { accessTokenSign, refreshTokenSign, verifyRefreshToken } = require('../helpers/generateToken')
const { ACCESS_TOKEN_EXPIRES_IN } = require('../config/jwt')

async function createSession(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email })

    if (!user) {
        return res.status(401).json({ isAuthenticate: false })
    }

    const checkPassword = await compare(password, user.password)

    if (!checkPassword) {
        return res.status(401).json({ isAuthenticate: false })
    }

    const tokenSession = await accessTokenSign(user);
    const refreshToken = await refreshTokenSign(user);

    res.status(200).json({
        isAuthenticate: true,
        tokenSession,
        expireIn: ACCESS_TOKEN_EXPIRES_IN,
        refreshToken
    })

}

async function updateSession(req, res) {
    const { refreshToken } = req.body;

    const tokenData = await verifyRefreshToken(refreshToken);

    if (!tokenData) {
        return res.status(400).json({
            error: "invalid token"
        })
    }

    const tokenSession = await accessTokenSign(tokenData);


    res.status(200).json({
        tokenSession,
        expireIn: ACCESS_TOKEN_EXPIRES_IN,
    })



}



module.exports = { createSession, updateSession }

