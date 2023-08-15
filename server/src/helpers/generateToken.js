const jwt = require('jsonwebtoken')
const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN, REFRESH_TOKEN_SECRET } = require('../config/jwt')
//la función tokenSign recibe por parámetro el user con la data de la bbdd posteriormente genera un token que estará codificado de una manera de acuerdo a la variable de entorno y tambíen contendrá información codificada en este caso el id del usuario, esta función retorna el token 

const accessTokenSign = async (user) => {
    return jwt.sign(
        {
            _id: user._id
        },
        ACCESS_TOKEN_SECRET,
        {
            expiresIn: ACCESS_TOKEN_EXPIRES_IN
        }
    )
}

const refreshTokenSign = async (user) => {
    return jwt.sign({
        _id: user._id
    },
        REFRESH_TOKEN_SECRET,
        {
            expiresIn: REFRESH_TOKEN_EXPIRES_IN
        }
    )
}

const verifyAccessToken = async (token) => {
    try {
        return jwt.verify(token, ACCESS_TOKEN_SECRET)
    } catch (e) {
        console.log(e)
        return null
    }
}

const verifyRefreshToken = async (refreshToken) => {
    try {
        return jwt.verify(refreshToken, REFRESH_TOKEN_SECRET)
    } catch (e) {
        console.log(e)
        return null
    }
}
module.exports = { accessTokenSign, verifyAccessToken, refreshTokenSign, verifyRefreshToken }