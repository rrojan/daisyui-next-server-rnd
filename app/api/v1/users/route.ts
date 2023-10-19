import { NextRequest, NextResponse } from "next/server"
import { updateUsersJson, isValidUser } from "../../utils/users"
import { fetchAllUsers } from "../../repositories/user"

export const GET = (request: NextRequest) => {
  return NextResponse.json({
    data: fetchAllUsers(),
  })
}

export const POST = async (request: NextRequest) => {
  const usersList = fetchAllUsers()
  const latestId = usersList[usersList.length - 1].id
  const body = await request.json()
  if (isValidUser(body)) {
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
  return NextResponse.json({ error: "Something went wrong" }, { status: 400 })
}
