const express = require('express')//exportar la librería de express
const app = express()
const port = 3000

const ventas_router=require('./routers/ventas.router');
app.use(ventas_router)
app.get('/', (req, res) => {
    
    res.send('Hello World')
})


app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})