import mongoose from "mongoose";
import { dbConnect } from "./dbConnect";

dbConnect();
const user_schema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , 'User-name is missing'],
    },
    email:{
        type:String,
        unique:[true , "This email is already registered!"],
        required:[true , "Your-email is missing"]
    },
    password:{
        type:String,
        required:[true , 'Your-password is missing'],
    },
    gender:{
        type:String,
        required:[true , "User-gender is missing"],
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
    verify:{
        type:Boolean,
        default:false,
    },
    imgUrl:{
        type:String,
        default:"/img/profileImg.jpg", 
    },
    createdAt: {
        type:Date,
        default:Date.now,
    }
});

export const User = mongoose.models.User || mongoose.model("User" , user_schema)