const express = require('express')
const router = express.Router()
const { createSession } = require('../../controllers/session.controllers');

router.post("/", createSession);

module.exports = router