const mongoose= require("mongoose")

const motosschema = new mongoose.Schema({

    placa:{
        type:String,
        required:[true,"marca is required"],

    },

    marca:{
        type:String,
        required:[true,"talla is required"],

    },
    color:{
        type:String,
        required:[true,"color is required"],

    },
    modelo:{
        type:Number,
        required:[true,"genero is required"],

    },
    cilindraje:{
        type:String,
        required:[true,"descripción is required"],

    },


})

const motosModel =mongoose.model("motos",motosschema)

module.exports=motosModel


