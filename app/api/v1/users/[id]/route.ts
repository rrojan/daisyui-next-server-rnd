import { createUpdateUserSchema } from "@/app/api/schemas/user"
import {
  deleteUserById,
  findUserById,
  updateUserById,
} from "@/app/api/repositories/user"
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

  return NextResponse.json({ data: user })
}

export const PATCH = async (
  request: NextRequest,
  { params: { id } }: Props
) => {
  const body = await request.json()

  const validation = createUpdateUserSchema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(
      { message: "Invalid user data", errors: validation.error.errors },
      { status: 400 }
    )
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
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }
  return NextResponse.json(
    { message: "User deleted successfully" },
    { status: 204 }
  )
}
