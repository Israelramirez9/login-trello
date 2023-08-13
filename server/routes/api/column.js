const express = require('express')
const router = express.Router()
const { createColumn } = require('../../controllers/column.controller')

router.post("/", createColumn);

module.exports = router