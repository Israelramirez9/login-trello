const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const { encrypt, compare } = require('./helpers/handleBcrypt')
const { User, Task } = require('./models')


//si la variable de entorno no existe pq levante el servidor desde mi pc con "npm run start:server", entonces MONGODB_URI va a tomar el valor del string comentado abajo, por ende me voy a conectar al puerto localhost:27017 " a mi propia IP, ya que en el puerto 27017 de mi IP local se está conectando al puerto 27017 de la base de datos del contenedor de mongo, previamente ya levantado con docker"
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://israel:password@localhost:27017/trello?authSource=admin'

//process es un objeto global que existe en nodejs , si PORT es false es decir si no existe toma el valor de 8080
const PORT = process.env.PORT || 8080;

app.use(cors())//permite que cualquier origen(del lado del cliente pueda realizar la petición al servidor),
//si se quiere bloquear ciertos origines se puede hacer con la misma librería cors
app.use(express.json());


app.post("/api/users", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })

    if (!user) {
        res.status(404).json({ isAuthenticate: false })
    } else {
        const checkPassword = await compare(password, user.password)
        if (checkPassword) {
            res.status(200).json({
                isAuthenticate: true,
                userId: user.userId
            })
        } else {
            res.status(404).json({ isAuthenticate: false })
        }

    }

})

app.post("/api/register", async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            const newUser = new User(req.body)
            newUser.createdAt = new Date().toLocaleString();
            newUser.userId = newUser._id;
            newUser.password = await encrypt(newUser.password);
            await newUser.save();
            res.status(201).json({
                isHasBeenCreated: true
            });
        } else {
            res.status(409).json({
                isHasBeenCreated: false
            })
        }
    } catch (error) {
        console.log(error)
    }
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

    if (!mongoose.Types.ObjectId.isValid(taskId)) { //verifica si el id es valido
        return res.status(400).json({
            error: 'incorrect Id'
        })
    }
    const task = await Task.findByIdAndDelete({ _id: taskId }) // se encarga de buscar en la base de datos el objeto con el parametro pasado y eliminarlo ,retorna el objeto task eliminado
    res.json(task);
})

app.put("/tasks/:taskId", async (req, res) => {

    const { taskId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(taskId)) { //verifica si el id es valido
        return res.status(400).json({
            error: 'incorrect Id'
        })
    }

    const task = await Task.findByIdAndUpdate(taskId, req.body) //la función recibe dos parametros, el primero es el identificador único del Id con lo cúal busca el objeto con ese parámetro guardado y por segundo parámetro es todo el recurso del objeto ha actualizar
    res.json(task);
})
app.listen(PORT, async () => {
    await mongoose.connect(MONGODB_URI)
    console.log(`server listen in http://localhost:${PORT}`)
})