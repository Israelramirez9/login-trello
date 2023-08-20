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
                email: newUser.email,
                name: newUser.name
            });
        } else {
            res.status(409).json({
                error: "existing user"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

async function updateUser(req, res) {
    const userId = req.user._id;
    const { email, password, name } = req.body

    if (!Types.ObjectId.isValid(userId)) { //verifica si el token es válido
        return res.status(400).json({
            error: 'incorrect token'
        })
    }

    const user = await User.findById(userId)


    if (!user) {
        return res.status(404).json({
            error: 'user not found'
        })
    }

    if (email && email.length !== 0) {
        user.email = email
    }

    if (name && name.length !== 0) {
        user.name = name
    }

    if (password && password.length !== 0) {
        user.password = await encrypt(password);
    }

    await User.findByIdAndUpdate(userId, user)


    res.status(200).json({
        email: user.email,
        name: user.name,

    })
}

async function deleteUser(req, res) {
    const userId = req.user._id;
    const user = await User.findById(userId);
    try {
        await User.findByIdAndDeleteHisRelations(userId)
        user.userId = undefined;
        return res.status(200).json(user)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            error: "error has occurred"
        })

    }
}



module.exports = { createUser, updateUser, deleteUser }