const express = require('express')
const app=express.Router()

const controladorVentas=require('../controllers/ventas.controller')
const controladorArticulos=require('../controllers/articulos.controller')
const merge=require('../organizarVentas')

//Endpoint ventas
app.post('/ventas', (req, res) => {
    controladorVentas.consultarVentas().then(respuesta_controlador=>{
        res.send(respuesta_controlador)
    }).catch(error=>{
        console.log('error ',error);
    })
})
//Endpoint articulos
app.get('/articulos', (req, res) => {
    controladorArticulos.consultarArticulos().then(respuesta_controlador=>{
        res.send(respuesta_controlador)
    }).catch(error=>{
        console.log('error ',error);
    })
})
app.post('/ventasMayores', (req, res) => {
    controladorVentas.consultarVentas().then(respuesta_controlador=>{
        let listaOrganizada=merge.mergeSort(respuesta_controlador);
        res.send(listaOrganizada)
    }).catch(error=>{
        console.log('error ',error);
    })
})
module.exports=app