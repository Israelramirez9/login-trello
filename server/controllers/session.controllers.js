const { compare } = require('../helpers/handleBcrypt')

const { User } = require('../models')

async function createSession(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email })

    if (!user) {
        res.status(404).json({ isAuthenticate: false })
    } else {
        const checkPassword = await compare(password, user.password)
        if (checkPassword) {
            res.status(200).json({
                isAuthenticate: true,
                userId: user.userId
            })
        } else {
            res.status(404).json({ isAuthenticate: false })
        }

    }
}

module.exports = { createSession }

