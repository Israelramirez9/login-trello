const express = require('express')
const router = express.Router()
const userRouter = require('./users')
const sessionRouter = require('./session')
const taskRouter = require('./tasks')
const columnRouter = require('./column')
const boardRouter = require('./boards')

router.use('/users', userRouter)
router.use('/session', sessionRouter)
router.use('/tasks', taskRouter)
router.use('/columns', columnRouter)
router.use('/boards', boardRouter)

module.exports = router