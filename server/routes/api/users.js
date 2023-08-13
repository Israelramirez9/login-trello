const express = require('express')
const router = express.Router()
const { createUser, updateUser } = require('../../controllers/users.controllers')
const { checkAuth } = require('../../middlewares/auth.middleware')

router.post("/", createUser);
router.put("/", checkAuth, updateUser);
module.exports = router