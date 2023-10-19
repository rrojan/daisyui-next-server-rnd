import { User } from "@/app/users/types"
import fs from "fs"

export const isValidUser = (body: any): boolean => {
  if (body?.name && body?.email && body?.username) {
    return true
  }
  return false
}

export const updateUsersJson = (newUsersList: User[]) => {
  const USERS_JSON_PATH = "app/api/data/users.json"
  try {
    console.log(process.cwd())
    fs.writeFileSync(USERS_JSON_PATH, JSON.stringify(newUsersList, null, 2))
  } catch (error) {
    console.error("Error adding new user:", error)
  }
}
