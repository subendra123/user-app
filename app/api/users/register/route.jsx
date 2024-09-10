
import Connection from '@/app/database/config';
import User from '@/app/models/users';
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';




export async function POST(request) {
    try {
        const { name, username,password } = await request.json();
        Connection();

        if (!name || !username || !password) {
            return new Response("Name, Username and Password is required", { status: 401 });
        }

        const user = await User.findOne({ username });
        if (user) {
            return new Response("Username already exist", { status: 400 });
        }

        const salt = await bcryptjs.genSalt(12);
        const hashedPassword = await bcryptjs.hash(password, salt);

        
        await User.create({name, username,password:hashedPassword  });
        return NextResponse.json({ message: "User Created" }, { status: 201 });

        
    } catch (error) {
        console.log(error);
        
    }
   
}

