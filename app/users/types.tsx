type SortOptions = "name" | "email"
type OrderOptions = "asc" | "desc"

export interface User {
  id: number
  name: string
  username: string
  email: string
}

export interface SortProps {
  sort: SortOptions
  order: OrderOptions
}
