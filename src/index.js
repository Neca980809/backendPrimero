
import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app.js";

dotenv.config();

const PORT = 3000;

console.log("inicializando servidor");
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("conexion exitosa a Mongo exitosa")
        app.listen( PORT, ()=>{
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        });
    })
    .catch((error)=>{console.log("Error al conectar con Mongo: ",error)});


