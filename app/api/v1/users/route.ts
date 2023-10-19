import { NextRequest, NextResponse } from "next/server"
import { updateUsersJson } from "../../utils/users"
import { fetchAllUsers } from "../../repositories/user"
import { createUpdateUserDTO } from "../../dtos/user"

export const GET = (request: NextRequest) => {
  return NextResponse.json({
    data: fetchAllUsers(),
  })
}

export const POST = async (request: NextRequest) => {
  const usersList = fetchAllUsers()
  const latestId = usersList[usersList.length - 1].id
  const body = await request.json()

  const validation = createUpdateUserDTO.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(
      { message: "Something went wrong", errors: validation.error.errors },
      { status: 400 }
    )
  }

  usersList.push({
    id: latestId + 1,
    username: body.username,
    name: body.name,
    email: body.email,
  })

  updateUsersJson(usersList)
  return NextResponse.json(
    { data: "New user created successfully" },
    { status: 201 }
  )
}
