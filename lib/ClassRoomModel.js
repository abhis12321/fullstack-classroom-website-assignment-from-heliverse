import mongoose from "mongoose";
import { dbConnect } from "./dbConnect";

dbConnect();
const time_range_schema = new mongoose.Schema({
    start:{
        type:String,
        required:[true],
        unique:[true],
    },
    end:{
        type:String,
        required:[true],
    },
});

const day_wise_schema = new mongoose.Schema({
    day:{
        type:String,
        required:[true],
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    },
    times:[time_range_schema],
});

const classroom_schema = new mongoose.Schema({
    classroom:{
        type:String,
        required:[true, "classroom title/name is missing"],
    },
    teacherName:{
        type:String,
        required:[true , "teacher name is missing for this class"],
    },
    teacherEmail:{
        type:String,
        required:[true , "teacher email-id is missing for this class"],
        unique:true,
    },
    timeTable:[day_wise_schema],
});


export const ClassRoom = mongoose.models.classroom || mongoose.model("classroom" , classroom_schema);