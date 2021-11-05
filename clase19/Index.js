const express=require("express")
const app=express()
const port=3000
const router=require("./router/index.router")
app.use(router)
app.listen(port,()=>{
    console.log("Api en ejecución: http://localhost:"+port)
})