const { encrypt } = require('../helpers/handleBcrypt')
const { Types } = require('mongoose')
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
    const userId = req.user._id;
    const { email, password, name } = req.body

    if (!Types.ObjectId.isValid(userId)) { //verifica si el id es valido
        return res.status(400).json({
            error: 'incorrect Id'
        })
    }

    const user = await User.findById(userId)
   

    if (!user) {
        return res.status(404).json({
            error: 'user not found'
        })
    }

    if (email) {
        user.email = email
    }

    if (name) {
        user.name = name
    }

    if (password) {
        user.password = await encrypt(password);
    }

    await User.findByIdAndUpdate(userId, user)


    res.status(200).json({
        email: user.email,
        name: user.name,

    })
}


module.exports = { createUser, updateUser }