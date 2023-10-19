import { NextRequest, NextResponse } from "next/server"
import { createProduct, fetchAllProducts } from "../../repositories/product"
import { createUpdateProductSchema } from "../../schemas/product"
import { Product } from "@/app/shared/types"

export const GET = (request: NextRequest) => {
  return NextResponse.json({
    data: fetchAllProducts(),
  })
}

export const POST = async (request: NextRequest) => {
  const body: Product = await request.json()

  const validation = createUpdateProductSchema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(
      {
        message: "Error creating product",
        errors: validation.error.errors,
      },
      { status: 400 }
    )
  }
  createProduct(body)
  return NextResponse.json(
    { message: "Product created successfully" },
    { status: 201 }
  )
}
