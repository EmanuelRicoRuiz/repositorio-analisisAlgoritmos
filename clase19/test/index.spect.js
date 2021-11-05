const supertest=require("supertest")

const express=require("express")
const app=express()

const router =require("../router/index.router")

app.use(router)

const request=supertest(app)


test("get/estudiante",()=>{
    let response=request.get("/estudiantes")
    console.log(response.body)
})