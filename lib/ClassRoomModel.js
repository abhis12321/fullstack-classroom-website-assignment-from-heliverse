import mongoose from "mongoose";
import { dbConnect } from "./dbConnect";

dbConnect();
const day_wise_schema = new mongoose.Schema({
    day: {
        type: String,
        required: [true],
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    },
    start: {
        type: String,
        required: [true],
    },
    end: {
        type: String,
        required: [true],
    },
});

const classroom_schema = new mongoose.Schema({
    classroom: {
        type: String,
        required: [true, "classroom title/name is missing"],
    },
    teacherName: {
        type: String,
        required: [true, "teacher name is missing for this class"],
    },
    teacherEmail: {
        type: String,
        required: [true, "teacher email-id is missing for this class"],
        unique: [true],
    },
    timeTable: [day_wise_schema],
});


export const ClassRoom = mongoose.models.classroom || mongoose.model("classroom", classroom_schema);