const express = require("express")
const motosservices= require("../services/motos")


function motos(app){

    const router = express.Router()
    const motserv= new motosservices()

    app.use("/api/motos",router)

    router.get("/",async(req,res)=>{

        const motos = await motserv.getAll()

        return res.json(motos)
    })
    router.put("/update:id",async(req,res)=>{

        const motos = await motserv.update(req.params.id,req.body)

        return res.json(motos)
    })
    router.delete("/delete:id",async(req,res)=>{

        const motos = await motserv.delete(req.params.id)

        return res.json(motos)
    })

    router.post("/create",async(req,res)=>{

        const motos = await motserv.create(req.body)

        return res.json(motos)
    })


}
module.exports=motos

