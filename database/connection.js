require('dotenv').config();

//importar mongoose
const mongoose = require("mongoose");

//hacer un metodo de conexion
const connection = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_CNN,{});

        console.log("Conectado correctamente a la DB app_musica");

    }catch(error){
        console.log(error);
        throw new Error("No se a establecido la conexion a la DB!!");
    }
}

//exportar conexion

module.exports = connection;