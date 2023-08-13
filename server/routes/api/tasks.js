const express = require('express')
const router = express.Router()
const { getTasks, createTask, deleteTask, updateTask } = require('../../controllers/tasks.controller');
const { checkAuth } = require('../../middlewares/auth.middleware')

router.get("/", checkAuth, getTasks);
router.post('/', checkAuth, createTask);
router.put('/:taskId', checkAuth, updateTask);
router.delete('/:taskId', checkAuth, deleteTask);

module.exports = router