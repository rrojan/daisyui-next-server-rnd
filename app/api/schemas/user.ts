import { z } from "zod"

export const createUpdateUserSchema = z.object({
  name: z.string().min(3),
  username: z.string().min(3),
  email: z.string().email(),
})
