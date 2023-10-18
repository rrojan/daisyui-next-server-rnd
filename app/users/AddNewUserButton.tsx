"use client"

import { useRouter } from "next/navigation"

const AddNewUserButton = () => {
  const router = useRouter()
  return (
    <button
      // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      className="btn btn-primary"
      onClick={() => router.push("/users/new")}
    >
      Create New User
    </button>
  )
}

export default AddNewUserButton
