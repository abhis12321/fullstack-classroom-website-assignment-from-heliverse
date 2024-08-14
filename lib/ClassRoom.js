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
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true , "teacher id is missing for this class"],
    },
    timetable:[day_wise_schema],
});


export const ClassRoom = mongoose.models.classroom || mongoose.model("classroom" , classroom_schema);