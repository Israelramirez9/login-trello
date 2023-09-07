require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { dbConnect } = require('./config/mongo')

const router = require('./routes')

//process es un objeto global que existe en nodejs , si PORT es false es decir si no existe toma el valor de 8080
const PORT = process.env.PORT || 4040;

app.use(cors())//permite que cualquier origen(del lado del cliente pueda realizar la petición al servidor),
//si se quiere bloquear ciertos origines se puede hacer con la misma librería cors

app.use(express.json());

app.use(router)


app.listen(PORT, async () => {
    await dbConnect();
    console.log(`server listen in http://localhost:${PORT}`)
})