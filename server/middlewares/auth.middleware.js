const { verifyToken } = require('../helpers/generateToken')
const http = require('node:http')
const express = require('express')
/**
 * 
 * @param {http.IncomingMessage} req 
 * @param {http.ServerResponse} res 
 * @param {express.NextFunction} next 
 */

async function checkAuth(req, res, next) {

    const token = req.headers?.authorization?.split(' ').pop()
    const tokenData = await verifyToken(token)
    console.log(tokenData)
    if (tokenData?._id) {
        req.user = tokenData;/*esto añade al req del middleware la propiedad user que contiene el payload del token descifrado y el req se comparte con los controladores o middelwares que sigan*/
        next()
    } else {
        res.status(409).json({
            error: "not authorized"
        })
    }
}

module.exports = { checkAuth }