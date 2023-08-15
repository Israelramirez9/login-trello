const mongoose = require('mongoose')

const User = mongoose.model('Users', new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    userId: String
},
    {
        timestamps: true,//esto añade la fecha de creacion y/o actualizacion de cada row
        versionKey: false//esto elimina la propiedad del modelo __v que viene por defecto con mongoose

    }))
User.findByIdAndDeleteHisRelations = async function (userId) {
    const boardsToDelete = await Board.find({ userId: userId })
    await Promise.all(boardsToDelete.map(async (board) => {
        return await Board.findByIdAndDeleteHisRelations(board._id, userId)
    }))
    await User.findByIdAndDelete(userId)
}

const Task = mongoose.model('Tasks', new mongoose.Schema({
    userId: String,
    columnIndex: Number,
    text: String,
    isCompleted: Boolean,
    taskId: String,
    columnId: String,

},
    {
        timestamps: true,//esto añade la fecha de creacion y/o actualizacion de cada row
        versionKey: false//esto elimina la propiedad del modelo __v que viene por defecto con mongoose

    }))

const Column = mongoose.model("Columns", new mongoose.Schema({
    userId: String,
    columnIndex: Number,
    title: String,
    boardId: String,
    columnId: String,

},
    {
        timestamps: true,
        versionKey: false,

    }))

Column.findByIdAndDeleteHisRelations = async function (columnId, userId) {

    const tasksToDelete = await Task.find({ columnId, userId })

    await Promise.all(tasksToDelete.map(async (task) => {
        return await Task.findByIdAndDelete(task._id)
    }))

    await Column.findByIdAndDelete(columnId)
}

const Board = mongoose.model("Boards", new mongoose.Schema({
    userId: String,
    title: String,
    boardId: String,

},
    {
        timestamps: true,
        versionKey: false,

    }
))
Board.findByIdAndDeleteHisRelations = async function (boardId, userId) {

    const columnsTodelete = await Column.find({ userId, boardId })

    await Promise.all(columnsTodelete.map(async (column) => {
        return await Column.findByIdAndDeleteHisRelations(column._id, userId)
    }));

    await Board.findByIdAndDelete(boardId)
}
module.exports = { Task, User, Column, Board }