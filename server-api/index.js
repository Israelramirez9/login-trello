const express = require('express')
const fs = require('node:fs')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');

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

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://israel:password@localhost:27017/trello?authSource=admin'

//process es un objeto global que existe en nodejs , si PORT es false es decir si no existe toma el valor de 8080
const PORT = process.env.PORT || 8080;

app.use(cors())//permite que cualquier origen(del lado del cliente pueda realizar la petición al servidor),
//si se quiere bloquear ciertos origines se puede hacer con la misma librería cors
app.use(express.json());

app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users)
});

app.post("/users", async (req, res) => {

    const user = new User(req.body)
    user.createdAt = new Date().toLocaleString();
    user.userId = user._id
    await user.save();
    res.status(201).json(user)

});

app.get("/tasks", async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks);

})

app.post("/tasks", async (req, res) => {

    const task = new Task(req.body);
    task.createdAt = new Date().toLocaleString();
    task.taskId = task._id
    await task.save()
    res.status(201).json(task);

})
app.delete("/tasks/:taskId", async (req, res) => {
    const { taskId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(taskId)) {
        return res.status(400).json({
            error: 'incorrect Id'
        })
    }
    const task = await Task.findByIdAndDelete({ _id: taskId })
    res.json(task);
})

app.put("/tasks/:taskId", async (req, res) => {

    const { taskId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(taskId)) {
        return res.status(400).json({
            error: 'incorrect Id'
        })
    }

    const task = await Task.findByIdAndUpdate(taskId, req.body)
    res.json(task);
})
app.listen(PORT, async () => {
    await mongoose.connect(MONGODB_URI)
    console.log(`server listen in http://localhost:${PORT}`)
})