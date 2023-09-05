const express = require('express')
const router = express.Router()
const { updateUser } = require('../../controllers/configUser.controllers');

router.put("/", updateUser);

module.exports = router