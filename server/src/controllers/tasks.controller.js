const { Task } = require('../models')
const { Types } = require('mongoose')


async function getTasks(req, res) {
    const userId = req.user._id
    const tasks = await Task.find({ userId })
    tasks.forEach(obj => {
        obj.userId = undefined
    })
    res.json(tasks);
}

async function createTask(req, res) {

    const userId = req.user._id
    const task = new Task(req.body);
    task.userId = userId
    task.taskId = task._id
    await task.save()

    task.userId = undefined
    res.status(201).json(task);
}

async function updateTask(req, res) {
    const { taskId } = req.params;
    const { columnIndex, text, isCompleted } = req.body;
    if (!Types.ObjectId.isValid(taskId)) { //verifica si el id es valido
        return res.status(400).json({
            error: 'incorrect Id'
        })
    }

    const userId = req.user._id;
    const task = await Task.findById(taskId);
    if (!task) {
        return res.status(404).json({
            error: "task not found"
        })
    }

    if (columnIndex) {
        task.columnIndex = columnIndex
    }

    if (text) {
        task.text = text;
    }
    
    task.isCompleted = isCompleted;

    await Task.findOneAndUpdate({ _id: taskId, userId: userId }, task) //la función recibe dos parametros, el primero es el identificador único del Id con lo cúal busca el objeto con ese parámetro guardado y por segundo parámetro es todo el recurso del objeto ha actualizar y retorna el recurso viejo

    task.userId = undefined
    res.status(201).json(task);
}

async function deleteTask(req, res) {
    const { taskId } = req.params;

    if (!Types.ObjectId.isValid(taskId)) { //verifica si el id es valido
        return res.status(400).json({
            error: 'incorrect Id'
        })
    }

    const userId = req.user._id
    const task = await Task.findOneAndDelete({ _id: taskId, userId: userId }) // se encarga de buscar en la base de datos el objeto con el parametro pasado y eliminarlo ,retorna el objeto task eliminado
    if (!task) {
        return res.status(404).json({
            error: "ivaled token"
        })
    }
    task.userId = undefined
    res.json(task);
}

module.exports = { getTasks, createTask, updateTask, deleteTask }