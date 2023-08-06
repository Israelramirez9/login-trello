const express = require('express')
const mongoose = require('mongoose')

const Animal = mongoose.model('Animal', new mongoose.Schema({
    tipo: String,
    estado: String,
}))

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI ||
    'mongodb://israel:password@localhost:27017/miapp?authSource=admin';


const app = express()



app.get('/', async (req, res) => {
    console.log('listando...')
    const animales = await Animal.find();
    return res.send(animales)
})
app.get("/crear", async (req, res) => {
    console.log('creando....')
    await Animal.create({ tipo: 'chanchito', estado: 'Feliz' })
    return res.send('ok')
})
app.listen(PORT, async () => {
    await mongoose.connect(MONGODB_URI)
    console.log(`listenning in http://localhost:${PORT}`)
})