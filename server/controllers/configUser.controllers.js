const { encrypt } = require('../helpers/handleBcrypt')

const { User } = require('../models')

async function updateUser(req, res) {
    const { email, password, name, userId } = req.body

    const user = await User.findOne({ userId })
    if (email) {
        user.email = email
    }
    if (name) {
        user.name = name
    } if (password) {
        user.password = await encrypt(password);
    }
    const updateUser = await User.findByIdAndUpdate(userId, user)
    res.status(201).json(user)
}

module.exports = { updateUser }

