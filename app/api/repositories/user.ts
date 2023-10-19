import data from "@/app/api/data/users.json"
import { updateJsonStore } from "../utils/json"
import { User } from "@/app/shared/types"

export const fetchAllUsers = (): User[] => data as User[]

export const createUser = (body: User) => {
  const usersList = fetchAllUsers()
  const latestId = usersList[usersList.length - 1]?.id || 0
  usersList.push({
    ...body,
    id: latestId + 1,
  })

  updateJsonStore("users", usersList)
}

export const findUserById = (id: number): User | undefined =>
  (data as User[]).find((user) => user.id === +id)

export const updateUserById = (id: number, body: User): boolean => {
  let isUserUpdated = false
  const usersList = fetchAllUsers()
  usersList.map((user, i) => {
    if (user.id === +id) {
      usersList[i] = { ...user, ...body } as User
      isUserUpdated = true
    }
  })
  updateJsonStore("users", usersList)

  return isUserUpdated
}

export const deleteUserById = (id: number): boolean => {
  const usersList = fetchAllUsers()
  const matchIndex = usersList.findIndex((user) => user.id === id)
  console.log("-----------------", matchIndex)
  if (matchIndex >= 0) {
    // TODO: Use immer
    updateJsonStore("users", [
      ...usersList.slice(0, matchIndex),
      ...usersList.slice(matchIndex + 1, usersList.length),
    ])
    return true
  }
  return false
}
