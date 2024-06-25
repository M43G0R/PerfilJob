import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";


export async function GET(request, {params}) {
    //params = "prueba1234@gmail.com"
    console.log(params.id)
    try {
    const user = await prisma.user.findUnique({
      where: {
        username: params.id,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
