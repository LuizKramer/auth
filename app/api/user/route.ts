import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from 'bcrypt'
import { verifyJwt } from "@/lib/jwt";

interface RequesBody {
    name: string;
    email: string;
    password: string;
}

export async function POST(req: NextRequest) {
    const body:RequesBody = await req.json();
    
    const accessToken = req.headers.get("authorization");
    if(!accessToken || !verifyJwt(accessToken)){
        return NextResponse.json({
            message: "Não Autorizado"
        },{
            status: 401
        })
    }

    

    const user = await prisma.user.create({
        data:{
            name: body.name,
            email: body.email,
            password: await bcrypt.hash(body.password, 10)
        }
    })
    const {password, ...result} = user

    return NextResponse.json(result);
}