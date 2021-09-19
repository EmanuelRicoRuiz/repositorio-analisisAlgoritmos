const express = require('express')
const app=express.Router()

const controlador=require("../controllers/usuarios.controller")
//Endpoint usuarios
app.post('/usuarios', (req, res) => {
    res.send('POST de usuarios')
})
app.get('/usuarios', (req, res) => {
    let respuesta_controlador=controlador.consultarUsuarios();
    res.send(respuesta_controlador)
})
app.put('/usuarios', (req, res) => {
    res.send('PUT de usuarios')
})
app.delete('/usuarios', (req, res) => {
    res.send('DELETE de usuarios')
})
module.exports=app