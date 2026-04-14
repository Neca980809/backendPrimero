import express from "express";

const app=express();
const PORT = 3000;

console.log("inicializando servidos...")

app.listen( PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})