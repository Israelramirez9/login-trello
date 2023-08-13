const express = require('express')
const router = express.Router()
const { getTasks, createTask, deleteTask, updateTask } = require('../../controllers/tasks.controller');

router.get("/", getTasks);
router.post('/', createTask);
router.put('/:taskId', updateTask);
router.delete('/:taskId', deleteTask);

module.exports = router