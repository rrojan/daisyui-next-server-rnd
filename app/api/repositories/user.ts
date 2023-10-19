import data from "@/app/api/data/users.json"
import { updateJsonStore } from "../utils/json"
import { User } from "@/app/shared/types"

const usersList: User[] = data

export const fetchAllUsers = (): User[] => usersList

export const createUser = (body: User) => {
  const usersList = fetchAllUsers()
  const latestId = usersList[usersList.length - 1].id
  usersList.push({
    ...body,
    id: latestId + 1,
  })

  updateJsonStore("users", usersList)
}

export const findUserById = (id: number): User | undefined =>
  (usersList as User[]).find((user) => user.id === +id)

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
  let isUserDeleted = false
  usersList.map((user, i) => {
    if (user.id === +id) {
      delete usersList[i]
      isUserDeleted = true
    }
  })
  updateJsonStore("users", usersList)
  return isUserDeleted
}
