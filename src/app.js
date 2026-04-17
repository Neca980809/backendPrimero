import express from "express";
const app=express();

app.get("/users",(req,res)=>{
    try{
        console.log("usuarios enviados otra vez")
        res.send("Envio de Usuarios")
    }catch(error){
        console.log(`tene un error: ${error}`);
        res.send("No se pusieron obtener los usuarios");
    }
});

export default app;