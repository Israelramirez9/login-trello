const mongoose = require('mongoose')

const User = mongoose.model('Users', new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    createdAt: String,
    userId: String
}))

const Task = mongoose.model('Tasks', new mongoose.Schema({
    userId: String,
    columnId: Number,
    text: String,
    isCompleted: Boolean,
    taskId: String,
    createdAt: String,
}))

module.exports = { Task, User }