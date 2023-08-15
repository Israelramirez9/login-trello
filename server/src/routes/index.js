const express = require('express')
const router = express.Router()
const apiRouter = require('./api')
const webRouter = require('./web')

router.use('/api/v1', apiRouter)

router.use('/', webRouter)

module.exports = router