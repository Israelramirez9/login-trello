const { Task } = require('../models')
const { Types } = require('mongoose')


async function getTasks(req, res) {
    const columnId = req.query.column;
    const userId = req.user._id
    try {
        const filters = {
            userId
        }
        if (columnId) {
            filters.columnId = columnId;
        }
        const tasks = await Task.find(filters)

        tasks.forEach(task => {
            task.userId = undefined
        })

        res.json(tasks);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            error: 'an error has ocurred'
        })
    }

}

async function createTask(req, res) {

    const userId = req.user._id

    try {
        const task = new Task(req.body);
        task.userId = userId
        task.taskId = task._id

        await task.save()

        task.userId = undefined
        res.status(201).json(task);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "an error has ocurred on server"
        })
    }

}

async function updateTask(req, res) {
    const { taskId } = req.params;
    const { columnIndex, text, isCompleted, columnId } = req.body;

    if (!Types.ObjectId.isValid(taskId)) { //verifica si el id es valido
        return res.status(400).json({
            error: 'incorrect Id'
        })
    }
    const userId = req.user._id;
    try {
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({
                error: "task not found"
            })
        }

        if (columnIndex !== undefined) {
            task.columnIndex = columnIndex
        }

        if (text) {
            task.text = text;
        }
        if (columnId) {
            task.columnId = columnId;
        }
        if (isCompleted !== undefined) {
            task.isCompleted = isCompleted;
        }

        //la función recibe dos parametros, el primero es el identificador único del Id con lo cual busca el objeto con ese parámetro guardado y por segundo parámetro es todo el recurso del objeto ha actualizar y retorna el recurso viejo

        await Task.findOneAndUpdate({ _id: taskId, userId: userId }, task)

        task.userId = undefined
        res.status(200).json(task);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "an error has ocurred on server"
        })
    }
}

async function deleteTask(req, res) {
    const { taskId } = req.params;

    if (!Types.ObjectId.isValid(taskId)) { //verifica si el id es valido
        return res.status(400).json({
            error: 'incorrect Id'
        })
    }
    try {
        const userId = req.user._id
        const task = await Task.findOneAndDelete({ _id: taskId, userId: userId }) // se encarga de buscar en la base de datos el objeto con el parametro pasado y eliminarlo ,retorna el objeto task eliminado
        if (!task) {
            return res.status(404).json({
                error: "ivaled token"
            })
        }
        task.userId = undefined
        res.status(200).json(task);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "an error has ocurred on server"
        })
    }

}

module.exports = { getTasks, createTask, updateTask, deleteTask }