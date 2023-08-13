const jwt = require('jsonwebtoken')

//la función tokenSign recibe por parámetro el user con la data de la bbdd posteriormente genera un token que estará codificado de una manera de acuerdo a la variable de entorno y tambíen contendrá información codificada en este caso el id del usuario, esta función retorna el token 

const tokenSign = async (user) => {
    return jwt.sign(
        {
            _id: user._id
        },
        process.env.SECRET_TOKEN
    )
}
/*
{
    expiresIn:process.env.JWT_EXPIRES_IN
}
*/
const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.SECRET_TOKEN)
    } catch (e) {
        return null
    }
}

module.exports = { tokenSign, verifyToken }