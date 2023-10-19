import {
  deleteOneProductById,
  findOneProductById,
  updateOneProductById,
} from "@/app/api/repositories/product"
import { createUpdateProductSchema } from "@/app/api/schemas/product"
import { NextRequest, NextResponse } from "next/server"

interface Props {
  params: {
    id: string
  }
}

export const GET = (request: NextRequest, { params: { id } }: Props) => {
  const product = findOneProductById(+id)
  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 })
  }
  return NextResponse.json({ data: product })
}

export const PATCH = async (
  request: NextRequest,
  { params: { id } }: Props
) => {
  const data = (await request.json()).data
  const validation = createUpdateProductSchema.safeParse(data)
  if (!validation.success) {
    return NextResponse.json(
      {
        message: "Failed to create product",
        errors: validation.error.errors,
      },
      { status: 400 }
    )
  }

  if (!updateOneProductById(+id, data)) {
    return NextResponse.json(
      { message: "Failed to update product" },
      { status: 400 }
    )
  }
  return NextResponse.json({ message: "Updated product successfully" })
}

export const DELETE = (request: NextRequest, { params: { id } }: Props) => {
  if (!deleteOneProductById(+id)) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 })
  }
  return NextResponse.json({ status: 204 })
}
