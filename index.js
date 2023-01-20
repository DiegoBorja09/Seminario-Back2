const express = require("express")
const { port } = require("./config")
const motosModel=require("./models/motos")
const mongoose=require("mongoose")
const { dbUsername, dbPassword, dbHost, dbName } = require("./config/index")



//Importar Routers
mongoose.set("strictQuery", false);
const connection= async function(){
    const conn = await mongoose.connect(`mongodb+srv://${dbUsername}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`)
    console.log("Mongo DB connected:",conn.connection.host) 
}

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
 

 app.get("/motos",async(req,res)=>{ 

    const motos = await getAll()

    return res.json(motos)
            
        
})
app.put("/update:id",async(req,res)=>{

    const motos = await update(req.params.id,req.body)

    return res.json(motos)

        
})
app.delete("/delete:id",async(req,res)=>{

    const motos = await deletem(req.params.id)

    return res.json(motos)
})

app.post("/create",async(req,res)=>{

    const motos = await create(req.body)

    return res.json(motos)

        
})

async function getAll(){

    try {
        const motos= await motosModel.find()

        return motos

    } catch (error) {
        
        return error

    }
    

}

async function update(id,data){
    try {
        const motos= await motosModel.findByIdAndUpdate(id,data,{new:true})

        return motos
        
    } catch (error) {
        
        return error

    }
}

async function deletem(id){
    try {
        const motos= await motosModel.findByIdAndDelete(id)

        return motos
        
    } catch (error) {
        
        return error

    }
}
async function create(data){

    try {
        const motos= await motosModel.create(data)

        return motos

    } catch (error) {
        
        return error

    }
    

}


