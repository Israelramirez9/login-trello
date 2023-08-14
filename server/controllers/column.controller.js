const { Column, Task } = require('../models')
const { Types } = require('mongoose')

async function createColumn(req, res) {
    const userId = req.user._id

    if (!Types.ObjectId.isValid(userId)) { //verifica si el token es válido
        return res.status(400).json({
            error: 'incorrect token'
        })
    }

    try {
        const column = await Column(req.body);
        column.userId = userId;
        column.columnId = column._id;
        await column.save();
        column.userId = undefined;
        res.status(201).json(column);
    } catch (e) {
        res.status(400)
    }
}

async function getColumns(req, res) {
    const userId = req.user._id;
    try {
        const columns = await Column.find({ userId });
        columns.forEach(col => col.userId = undefined)
        res.json(columns);
    } catch (e) {
        res.status(400)
    }
}

async function updateColumn(req, res) {
    const userId = req.user._id;
    const { title } = req.body
    const { columnId } = req.params;

    const column = await Column.findOne({ _id: columnId })

    if (!column) {
        return res.status(404).json({
            error: "column not found"
        })
    }

    column.title = title;
    const newColumn = await Column.findOneAndUpdate({ _id: columnId, userId: userId }, column)
    if (!newColumn) {
        return res.status(404).json({
            error: "invaled token"
        })
    }

    res.status(202).json({
        title: title,
        columnId: columnId
    })

}
async function deleteColumn(req, res) {
    console.log(req.user)
    const userId = req.user._id;
    const { columnId } = req.params;
    console.log(userId)
    const column = await Column.findById(columnId);

    const taskTodelete = await Task.find({ userId: userId, columnIndex: column.columnIndex })
    if (!taskTodelete) {
        return res.status(400).json({
            error: "column number o token invaled"
        })
    }
    taskTodelete.forEach(async (task) => {
        await Task.findOneAndDelete({ taskId: task.taskId })
    })

    const columnTodelete = await Column.findOneAndDelete({ columnId: columnId, userId: userId })
    if (!columnTodelete) {
        return res.status(404).json({
            error: "token or id column invaled"
        })
    }
    columnTodelete.userId = undefined;
    res.status(200).json(columnTodelete)


}

module.exports = { createColumn, getColumns, updateColumn, deleteColumn }