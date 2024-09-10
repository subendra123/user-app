import Connection from '@/app/database/config';
import User from '@/app/models/users';
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { username,password } = await request.json();
        Connection();

        if (!username || !password) {
            return new Response("Username and Password is required", { status: 401 });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return new Response("Username does not exist", { status: 400 });
        }


        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return new Response("Incorrect Password", { status: 400 });
        }
       
        const response = NextResponse.json({ message: "Login successfull" });
        return response;
        
       

       
        
    } catch (error) {
        console.log(error);
        
    }
   
}