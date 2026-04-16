import express from "express";

const app=express();
const PORT = 3000;

console.log("inicializando servidor...")

app.get("/users",(req,res)=>{
    try{
        console.log("usuarios enviados otra vez perra")
        res.send("Envio de Usuarios")
    }catch(error){
        console.log(`tene un error: ${error}`);
        res.send("No se pusieron obtener los usuarios");
    }
})

app.listen( PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})