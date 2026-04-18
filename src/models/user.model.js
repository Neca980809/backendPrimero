import mongoose from "mongoose";
const Schema=mongoose.Schema;

const userSchema = new Schema(
    {
        name: String,
        nickName: String,
        email: String,
        age:Number,
        password: String,
        hijos: Array,
        role: String,
        bornDate: Date
    }
);

const User=mongoose.model("User",userSchema);

export default User;