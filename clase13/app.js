const express = require('express')//exportar la librería
const app = express()
const port = 3000

//Endpoint hello world
app.get('/', (req, res) => {
    res.send('Hello World!')
})


//importar usuarios router
const usuarios_router=require("./routers/usuarios.router")
app.use(usuarios_router);

//levantar servicio para escuchar las solicitudes (request-req)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})