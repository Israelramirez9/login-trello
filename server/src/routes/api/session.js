const express = require('express')
const router = express.Router()
const { createSession, updateSession } = require('../../controllers/session.controllers');

router.post("/", createSession);
router.put("/", updateSession);

module.exports = router