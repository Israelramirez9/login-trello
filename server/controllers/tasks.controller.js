const { Task } = require('../models')
const { Types } = require('mongoose')

async function getTasks(req, res) {
    const tasks = await Task.find()
    res.json(tasks);
}

async function createTask(req, res) {
    const task = new Task(req.body);
    task.taskId = task._id
    await task.save()
    res.status(201).json(task);
}

async function updateTask(req, res) {
    const { taskId } = req.params;

    if (!Types.ObjectId.isValid(taskId)) { //verifica si el id es valido
        return res.status(400).json({
            error: 'incorrect Id'
        })
    }

    const task = await Task.findByIdAndUpdate(taskId, req.body) //la función recibe dos parametros, el primero es el identificador único del Id con lo cúal busca el objeto con ese parámetro guardado y por segundo parámetro es todo el recurso del objeto ha actualizar y retorna el recurso viejo
    res.json(task);
}

async function deleteTask(req, res) {
    const { taskId } = req.params;
    if (!Types.ObjectId.isValid(taskId)) { //verifica si el id es valido
        return res.status(400).json({
            error: 'incorrect Id'
        })
    }
    const task = await Task.findByIdAndDelete({ _id: taskId }) // se encarga de buscar en la base de datos el objeto con el parametro pasado y eliminarlo ,retorna el objeto task eliminado
    res.json(task);
}

module.exports = { getTasks, createTask, updateTask, deleteTask }