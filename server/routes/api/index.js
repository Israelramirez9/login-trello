const express = require('express')
const router = express.Router()
const userRouter = require('./users')
const sessionRouter = require('./session')
const taskRouter = require('./tasks')
const columnRouter = require('./column')

router.use('/users', userRouter)
router.use('/session', sessionRouter)
router.use('/tasks', taskRouter)
router.use('/column', columnRouter)

module.exports = router