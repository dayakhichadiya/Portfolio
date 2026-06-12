import { connectDB } from "@/lib/monogodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
    await connectDB();

    const users = await User.find();

    return NextResponse.json(users);
}

export async function POST(request) {
    await connectDB();

    const body = await request.json();
    const user = await User.create(body);

    return NextResponse.json(user, {
        status: 201,
    })
}

// GET  http://localhost:3000/api/users