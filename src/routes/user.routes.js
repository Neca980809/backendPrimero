import express from "express";
import {getUsers,postUsers} from "../controllers/user.controller.js";
const router=express.Router();

//Leer todos los usuarios
router.get("/users",getUsers);

//crear un usuario
router.post("/users",postUsers);

export default router;

