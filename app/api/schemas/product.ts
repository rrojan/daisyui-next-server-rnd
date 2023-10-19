import { z } from "zod"

export const createUpdateProductSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(0),
  price: z.number().positive(),
})
