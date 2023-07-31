const express = require('express')
const fs = require('node:fs')
const app = express();
const cors = require('cors')

app.use(cors())//permite que cualquier origen(del lado del cliente pueda realizar la petición al servidor),
//si se quiere bloquear ciertos origines se puede hacer con la misma librería cors
app.use(express.json());
//process es un objeto global que existe en nodejs , si PORT es false es decir si no existe toma el valor de 8080
const PORT = process.env.PORT || 8080;

app.get("/users", (req, res) => {
    const userString = fs.readFileSync(__dirname + '/users.json')
    const users = JSON.parse(userString.toString());
    res.json(users)
});

app.post("/users", (req, res) => {
    const userString = fs.readFileSync(__dirname + '/users.json')
    const users = JSON.parse(userString.toString());
    const user = req.body;
    user.createdAt = new Date().toLocaleString();
    user.userId = users.length + 1;
    users.push(user);
   
    fs.writeFileSync(__dirname + '/users.json', JSON.stringify(users));
    res.status(201).json(user)

});

app.get("/tasks", (req, res) => {
    const tasksString = fs.readFileSync(__dirname + '/tasks.json')
    const tasks = JSON.parse(tasksString.toString());
    res.json(tasks);

})

app.post("/tasks", (req, res) => {
    const tasksString = fs.readFileSync(__dirname + '/tasks.json')
    const tasks = JSON.parse(tasksString.toString());
    const task = req.body;
    task.createdAt = new Date().toLocaleString();
    task.taskId = tasks.length + 1;
    tasks.push(task);
    fs.writeFileSync(__dirname + '/tasks.json', JSON.stringify(tasks))
    res.status(201).json(task);
})
app.delete("/tasks/:taskId", (req, res) => {
    const tasksString = fs.readFileSync(__dirname + '/tasks.json')
    const tasks = JSON.parse(tasksString.toString());
    const taskToDelete = req.params.taskId;
    const tasksUpdate = tasks.filter(task => task.taskId != taskToDelete)
    fs.writeFileSync(__dirname + '/tasks.json', JSON.stringify(tasksUpdate))
    res.json(taskToDelete);
})

app.put("/tasks/:taskId", (req, res) => {
    const tasksString = fs.readFileSync(__dirname + '/tasks.json')
    const tasks = JSON.parse(tasksString.toString());
    const taskIdToUpdate = req.params.taskId;
    const newTask = req.body;

    const tasksUpdate = tasks.map(task => {
        if (task.taskId == taskIdToUpdate) {
            return newTask
        } else {
            return task
        }
    })
    fs.writeFileSync(__dirname + '/tasks.json', JSON.stringify(tasksUpdate))
    res.json(newTask);
})
app.listen(PORT, () => {
    console.log(`server listen in http://localhost:${PORT}`)
})