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

const Task = mongoose.model('Tasks', new mongoose.Schema({
    userId: String,
    columnId: Number,
    text: String,
    isCompleted: Boolean,
    taskId: String,

},
    {
        timestamps: true,//esto añade la fecha de creacion y/o actualizacion de cada row
        versionKey: false//esto elimina la propiedad del modelo __v que viene por defecto con mongoose

    }))

const Column = mongoose.model("Columns", new mongoose.Schema({
    userId: String,
    columnId: Number,
    text: String,
    boardId: String,
  
},
    {
        timestamps: true,
        versionKey: false
    }))
module.exports = { Task, User, Column }