import { User } from "../shared/types"

interface Props {
  user: User
}
const UserCard = ({ user }: Props) => {
  return (
    <li
      key={user.id}
      className="flex flex-col items-center justify-center w-1/4 h-20 py-4 my-4 border rounded-md bg-blue-300 text-gray-800 shadow-md duration-75 hover:shadow-lg hover:scale-110 hover:cursor-pointer hover:bg-blue-500 hover:text-white hover:ease-in"
    >
      <div className="text-lg">{user.name}</div>
      <div className="flex justify-between mt-6 w-11/12">
        <div className="email text-xs">{user.email}</div>
        <div className="username text-xs">({user.username})</div>
      </div>
    </li>
  )
}

export default UserCard
