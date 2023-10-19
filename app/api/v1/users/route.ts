import { NextRequest, NextResponse } from "next/server"
import { updateJsonStore } from "../../utils/json"
import { createUser, fetchAllUsers } from "../../repositories/user"
import { createUpdateUserSchema } from "../../schemas/user"
import { createProduct } from "../../repositories/product"
import { User } from "@/app/shared/types"

export const GET = (request: NextRequest) => {
  return NextResponse.json({
    data: fetchAllUsers(),
  })
}

export const POST = async (request: NextRequest) => {
  const body: User = await request.json()

  const validation = createUpdateUserSchema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(
      { message: "Something went wrong", errors: validation.error.errors },
      { status: 400 }
    )
  }

  createUser(body)
  return NextResponse.json(
    { data: "New user created successfully" },
    { status: 201 }
  )
}
