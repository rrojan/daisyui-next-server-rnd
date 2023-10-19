import { User } from "@/app/users/types"
import data from "@/app/api/data/users.json"
import { updateUsersJson } from "../utils/users"

const usersList: User[] = data

export const fetchAllUsers = (): User[] => usersList

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
  updateUsersJson(usersList)

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
  updateUsersJson(usersList)
  return isUserDeleted
}
