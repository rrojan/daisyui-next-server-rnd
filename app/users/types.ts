export type SortOptions = "name" | "email"
export type OrderOptions = "asc" | "desc"

export interface SortProps {
  sort: SortOptions
  order: OrderOptions
}
