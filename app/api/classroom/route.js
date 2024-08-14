import { ClassRoom } from "@/lib/ClassRoomModel";
import { NextResponse } from "next/server";

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