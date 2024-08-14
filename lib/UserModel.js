import mongoose from "mongoose";
import { dbConnect } from "./dbConnect";

dbConnect();
const user_schema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , "User's name is missing"],
    },
    email:{
        type:String,
        unique:[true , "This email is already registered!"],
        required:[true , "User's email is missing"]
    },
    phoneNo:{
        type:Number,
        required:[true , "User's phone number is missing"]
    },
    password:{
        type:String,
        required:[true , "User's password is missing"],
    },
    gender:{
        type:String,
        required:[true , "User's gender is missing"],
        enum: {
            values:[
                "male",
                "female",
                "others"
            ],
            message:"Please select correct gender",
        }
    },
    userRole:{
        type:String,
        required:[true , "User-role is missing"],
        enum: {
            values:[
                "principal",
                "teacher",
                "student"
            ],
            message:"Please select correct user-role",
        }
    },
    userAddress:{
        type:String,
        required:[true , "User's address is missing"],
    },
    classRoom:{
        type:String,
    },
    verify:{
        type:Boolean,
        default:false,
    },
    createdAt: {
        type:Date,
        default:Date.now,
    }
});

export const User = mongoose.models.User || mongoose.model("User" , user_schema)