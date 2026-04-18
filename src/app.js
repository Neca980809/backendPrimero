import express from "express";
import user_routes from "./routes/user.routes.js";

const app=express();

app.use(user_routes);

export default app;