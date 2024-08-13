import { User } from "@/lib/UserModel";
import { NextResponse } from "next/server";



export async function POST(req) {
    try {
        const body = await req.json();
        const user = new User(body);
        await user.save();
        return NextResponse.json({ success:true , message:"user registered successfully" })
    } catch(error) {
        return NextResponse.json({ success:false, message:`user's registration failed! , ${error.message}` });
    }
}