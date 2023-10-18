import { User } from "@/app/users/types"

export const getAllUsers = async (): Promise<User[]> => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users")
  const users: User[] = await resp.json()
  return users
}
