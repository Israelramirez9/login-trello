const mongoose = require('mongoose')

//si la variable de entorno no existe pq levante el servidor desde mi pc con "npm run start:server", entonces MONGODB_URI va a tomar el valor del string comentado abajo, por ende me voy a conectar al puerto localhost:27017 " a mi propia IP, ya que en el puerto 27017 de mi IP local se está conectando al puerto 27017 de la base de datos del contenedor de mongo, previamente ya levantado con docker"
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://israel:1234@cluster0.qxmbcpd.mongodb.net/?retryWrites=true&w=majority'

const dbConnect = async () => {
    await mongoose.connect(MONGODB_URI)
}

module.exports = { dbConnect }
