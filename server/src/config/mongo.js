"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const mongoose = require('mongoose');
//si la variable de entorno no existe pq levante el servidor desde mi pc con "npm run start:server", entonces MONGODB_URI va a tomar el valor del string comentado abajo, por ende me voy a conectar al puerto localhost:27017 " a mi propia IP, ya que en el puerto 27017 de mi IP local se está conectando al puerto 27017 de la base de datos del contenedor de mongo, previamente ya levantado con docker"
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://israel:1234@cluster0.qxmbcpd.mongodb.net/?retryWrites=true&w=majority';
const dbConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose.connect(MONGODB_URI);
});
module.exports = { dbConnect };
