const bcrypt = require('bcryptjs')


//se encripta la contraseña que recibimos del la do del cliente
const encrypt = async (textPasswordPlain) => {
    const hash = await bcrypt.hash(textPasswordPlain, 10)    
    return hash
}

//compara la contraseña enviada del lado del cliente con la contraseña encriptada en la base de datos
const compare = async (textPasswordPlain, hashPassword) => {
    return await bcrypt.compare(textPasswordPlain, hashPassword)
}

module.exports = { encrypt, compare }