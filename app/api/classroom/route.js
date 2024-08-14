import { ClassRoom } from "@/lib/ClassRoomModel";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const classrooms = await ClassRoom.find();
        return NextResponse.json({ success:true , message:"Class-room is created successfully!", classrooms });
    } catch(error) {
        return NextResponse.json({ success:false , message:error.message });
    }    
}

export async function POST(req) {
    try {
        const body = await req.json();
        const classroom = new ClassRoom(body);
        await classroom.save();        
        return NextResponse.json({ success:true , message:"Class-room is created successfully!" });
    } catch(error) {
        return NextResponse.json({ success:false , message:error.message });
    }
}