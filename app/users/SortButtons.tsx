"use client"

import { useRouter } from "next/navigation"
import { SortProps } from "./types"

const SortButtons = ({ sort, order }: SortProps) => {
  const sortBtn = "btn btn-sm btn-neutral mx-2 "
  const btnRowWrapper = "inline-flex items-center me-8"

  const router = useRouter()

  const isActive = (option: string) => {
    if (sort === option || order === option) {
      return "btn-active"
    }
    return "btn-outline"
  }

  const updateQueryParams = (newSort: string, newOrder: string) => {
    // Reset ordering if new sort option is used
    if (newSort !== sort) {
      newOrder = "asc"
    }
    router.push(`/users?sort=${newSort}&order=${newOrder}`)
  }

  return (
    <div className="my-4">
      <div className={btnRowWrapper}>
        <span>Sort: </span>
        <button
          className={sortBtn + isActive("name")}
          onClick={() => updateQueryParams("name", order)}
        >
          Name
        </button>
        <button
          className={sortBtn + isActive("email")}
          onClick={() => updateQueryParams("email", order)}
        >
          Email
        </button>
      </div>
      <div className={btnRowWrapper}>
        <span>Order: </span>
        <button
          className={sortBtn + isActive("asc")}
          onClick={() => updateQueryParams(sort, "asc")}
        >
          Low to high
        </button>
        <button
          className={sortBtn + isActive("desc")}
          onClick={() => updateQueryParams(sort, "desc")}
        >
          High to low
        </button>
      </div>
    </div>
  )
}

export default SortButtons
