const { compare } = require('../helpers/handleBcrypt')
const { User } = require('../models')
const { tokenSign } = require('../helpers/generateToken')

async function createSession(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email })

    if (!user) {
        res.status(404).json({ isAuthenticate: false })
    } else {
        const checkPassword = await compare(password, user.password)
        const tokenSession = await tokenSign(user);

        if (checkPassword) {
            res.status(200).json({
                isAuthenticate: true,
                userId: user.userId,
                tokenSession
            })
        } else {
            res.status(404).json({ isAuthenticate: false })
        }

    }
}

module.exports = { createSession }

