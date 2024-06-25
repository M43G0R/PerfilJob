const { NextResponse } = require("next/server")
import prisma from "@/libs/prisma"
import bcrypt from "bcrypt"

export async function POST(request) {

  try {

    const data = await request.json()

    const emailFound = await prisma.user.findUnique({
      where: {
        email: data.email
      }
    })

    if (emailFound) {
      return NextResponse.json({
        message: "Email already exists"
      }, {
        status: 400
      })
    }

    const usernameFound = await prisma.user.findUnique({
      where: {
        username: data.username
      }
    })

    if (usernameFound) {
      return NextResponse.json({
        message: "Username already exists"
      }, {
        status: 400
      })
    }

    //console.log(data)

    data.password = await bcrypt.hash(data.password, 10)

    const newUser = await prisma.user.create({ data })

    const { password: _, ...user } = newUser

    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message
      },
      {
        status: 500
      }
    )
  }


}


export async function GET() {
  const users = await prisma.user.findMany()

  return NextResponse.json(users)
}