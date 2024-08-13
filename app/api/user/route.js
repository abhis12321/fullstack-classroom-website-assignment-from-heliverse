import { NextResponse } from "next/server";



export async function POST(req) {
    try {
        const body = await req.json();
        console.log(body);
        return NextResponse.json({ success:true })
    } catch(error) {
        return NextResponse.json({ success:false, message:error.message });
    }
}