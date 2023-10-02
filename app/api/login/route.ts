import { signJwtAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import * as bcrypt from 'bcrypt'
import { Result } from "postcss";

interface RequesBody {
    username:string;
    password:string;
}

export async function POST(req: Request) {
    const body:RequesBody =  await req.json();
    
    const user = await prisma.user.findFirst({
        where:{
             email: body.username
        }
    })

    if(user && (await bcrypt.compare(body.password, user.password))){
        const {password, ...userWithoutPass} = user;
        const accessToken = signJwtAccessToken(userWithoutPass);
        const result ={
            ...userWithoutPass,
            accessToken
        };
        return new Response(JSON.stringify(result));
    }
    else{
        return new Response(JSON.stringify(null))
    }
}