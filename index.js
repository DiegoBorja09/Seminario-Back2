const express = require("express")
const { port } = require("./config")
const {connection} = require("./config/db")
const motosModel=require("./models/motos")
const motosservices= require("./services/motos")


//Importar Routers

connection()
const app = express()

app.use(express.json())

//utilizamos Routers

app.get("/",(req,res)=>{
    return res.json({
        name:"Motos v1"
    })
})


app.listen(port,()=>{
    console.log("Listening: http://localhost:"+port)
})
 
const motserv= new motosservices()
 app.get("/motos",async(req,res)=>{ 

    const motos = await motserv.getAll()

    return res.json(motos)
            
        
})
app.put("/update:id",async(req,res)=>{

    const motos = await motserv.update(req.params.id,req.body)

    return res.json(motos)

        
})
app.delete("/delete:id",async(req,res)=>{

    const motos = await motserv.delete(req.params.id)

    return res.json(motos)
})

app.post("/create",async(req,res)=>{

    const motos = await motserv.create(req.body)

    return res.json(motos)

        
})


