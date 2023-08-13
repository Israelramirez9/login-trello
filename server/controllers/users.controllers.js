const { encrypt } = require('../helpers/handleBcrypt')

const { User } = require('../models')

async function createUser(req, res) {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            const newUser = new User(req.body)

            newUser.userId = newUser._id;
            newUser.password = await encrypt(newUser.password);
            await newUser.save();
            res.status(201).json({
                isHasBeenCreated: true
            });
        } else {
            res.status(409).json({
                isHasBeenCreated: false
            })
        }
    } catch (error) {
        console.log(error)
    }
}

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

module.exports = { createUser, updateUser }