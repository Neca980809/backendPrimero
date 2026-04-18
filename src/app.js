import express from "express";
import User from "./models/users.model.js";
const app=express();

app.get("/users",async(req,res)=>{
    try{
        const usuarios=await User.find().select("-password");
        res.send(usuarios);
    }catch(error){
        console.log(`tene un error: ${error}`);
        res.send("No se pusieron obtener los usuarios");
    }
});

app.post("/users", async(req,res)=>{
    try{
        const usurioNuevo={
        name:"Anakin Skywalker",
        nickName:"Darth Vader",
        age:47,
        hijos:["Luke Skywalker","Leia Organa"]
    }
    console.log("Se recibio una peticion post");
    const usuario=new User(usurioNuevo);
    await usuario.save();
    res.send("Usuario creado: ",usuario);
    }catch(error){
        console.log("Error en post: ",error);
        res.send("Error inesperado");
    }
})

export default app;