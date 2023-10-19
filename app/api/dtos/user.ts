import { z } from "zod"

export const createUpdateUserDTO = z.object({
  name: z.string().min(3),
  username: z.string().min(3),
  email: z.string().email(),
})
