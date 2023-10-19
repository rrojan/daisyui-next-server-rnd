import {
  deleteUserById,
  findUserById,
  updateUserById,
} from "@/app/api/repositories/user"
import { isValidUser } from "@api/utils/users"
import { NextRequest, NextResponse } from "next/server"

interface Props {
  params: {
    id: string
  }
}

export const GET = (request: NextRequest, { params: { id } }: Props) => {
  const user = findUserById(+id)
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }

  return NextResponse.json({
    data: user,
  })
}

export const PUT = async (request: NextRequest, { params: { id } }: Props) => {
  const body = await request.json()

  if (!isValidUser(body)) {
    return NextResponse.json({ error: "Invalid user data" }, { status: 400 })
  }

  if (!updateUserById(+id, body)) {
    return NextResponse.json(
      { error: "Could not find user with id" },
      { status: 404 }
    )
  }

  return NextResponse.json({ message: "Updated user successfully" })
}

export const DELETE = (request: NextRequest, { params: { id } }: Props) => {
  if (!deleteUserById(+id)) {
    return NextResponse.json(
      { error: "Could not find user with id" },
      { status: 404 }
    )
  }
  return NextResponse.json({ status: 204 })
}
