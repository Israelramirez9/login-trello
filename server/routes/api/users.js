const express = require('express')
const router = express.Router()
const { createUser, updateUser } = require('../../controllers/users.controllers')

router.post("/", createUser);
router.put("/", updateUser);
module.exports = router