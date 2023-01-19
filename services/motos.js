const motosModel=require("../models/motos")


class motos{

   async getAll(){

        try {
            const motos= await motosModel.find()

            return motos

        } catch (error) {
            
            return error

        }
        

    }

    async create(data){

        try {
            const motos= await motosModel.create(data)

            return motos
            
        } catch (error) {
            
            return error

        }


    }

    async update(id,data){
        try {
            const motos= await motosModel.findByIdAndUpdate(id,data,{new:true})

            return motos
            
        } catch (error) {
            
            return error

        }
    }

    async delete(id){
        try {
            const motos= await motosModel.findByIdAndDelete(id)

            return motos
            
        } catch (error) {
            
            return error

        }
    }


}

module.exports=motos