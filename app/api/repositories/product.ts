import { Product } from "@/app/shared/types"
import data from "@api/data/products.json"
import { updateJsonStore } from "../utils/json"

export const fetchAllProducts = (): Product[] => data

export const createProduct = (newProductData: Product) => {
  const productsList = fetchAllProducts()
  const latestId = productsList[productsList.length]?.id || 0
  productsList.push({
    ...newProductData,
    id: latestId + 1,
  })
  updateJsonStore("products", productsList)
}

export const findOneProductById = (id: number): Product | undefined =>
  (data as Product[]).find((product) => product.id === id)

export const updateOneProductById = (
  id: number,
  newProductData: Product
): boolean => {
  const productsList: Product[] = data
  let isProductUpdated = false

  productsList.map((product, i) => {
    if (product.id === id) {
      productsList[id] = { ...product, ...newProductData }
      isProductUpdated = true
    }
  })
  return isProductUpdated
}

export const deleteOneProductById = (id: number): boolean => {
  const productsList = fetchAllProducts()
  const matchIndex = productsList.findIndex((user) => user.id === id)
  if (matchIndex >= 0) {
    updateJsonStore("products", [
      ...productsList.slice(0, matchIndex),
      ...productsList.slice(matchIndex + 1, productsList.length),
    ])
    return true
  }
  return false
}
