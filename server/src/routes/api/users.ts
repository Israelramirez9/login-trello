const express = require('express')
const router = express.Router()
const { createUser, updateUser, deleteUser, getUser } = require('../../controllers/users.controllers')
const { checkAuth } = require('../../middlewares/auth.middleware')

router.get('/', checkAuth, getUser);
router.post("/", createUser);
router.put("/", checkAuth, updateUser);
router.delete("/", checkAuth, deleteUser);

module.exports = router