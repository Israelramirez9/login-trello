const express = require('express')
const router = express.Router()
const path = require('node:path')

const clientFolder = path.resolve(__dirname + '/../../../client/build')

//este middleware responde por defecto el archivo index.html para la ruta raiz
router.use(express.static(clientFolder))

//por defecto todas las rutas que no sean la raiz o algún archivo de la carpeta del cliente, se van a enviar con el archivo index.html para que las procese react
router.use('/**', (req, res) => {
    res.sendFile(clientFolder + '/index.html')
})

module.exports = router