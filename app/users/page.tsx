import AddNewUserButton from "@/app/users/AddNewUserButton"
import { NextPage } from "next"
import SortButtons from "./SortButtons"
import { OrderOptions, SortOptions, SortProps, User } from "./types"
import UserCard from "./UserCard"
import { ISortByObjectSorter, sort as fastSort } from "fast-sort"

interface Props {
  searchParams: SortProps
}

const Users: NextPage<Props> = async ({
  searchParams: { sort, order },
}: Props) => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  })
  let users: User[] = await resp.json()

  if (!sort) {
    sort = "name"
  }
  if (!order) {
    order = "asc"
  }

  users = fastSort(users).by([
    {
      [order as OrderOptions]: (u: User) => u[sort as SortOptions],
    } as unknown as ISortByObjectSorter<User>,
  ])

  return (
    <div className="px-8 py-16 mx-16">
      <h1>All Users</h1>
      <SortButtons sort={sort} order={order} />
      <ul className="flex flex-wrap gap-10 mt-6 mb-10">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
      <AddNewUserButton />
    </div>
  )
}

export default Users
