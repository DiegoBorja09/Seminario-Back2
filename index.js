const express = require("express")
const { port } = require("./config")
const {connection} = require("./config/db")

//Importar Routers

const routermotos= require("./routes/motos")

connection()
const app = express()

app.use(express.json())

//utilizamos Routers

routermotos(app)

app.get("/",(req,res)=>{
    return res.json({
        name:"Motos v1"
    })
})


app.listen(port,()=>{
    console.log("Listening: http://localhost:"+port)
})