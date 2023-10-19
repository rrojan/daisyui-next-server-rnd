import { Product } from "@/app/shared/types"
import data from "@api/data/products.json"
import { updateJsonStore } from "../utils/json"

export const fetchAllProducts = (): Product[] => data

export const createProduct = (newProductData: Product) => {
  const productsList = fetchAllProducts()
  productsList.push({
    ...newProductData,
    id: productsList[productsList.length].id + 1,
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
  let isProductDeleted = false
  productsList.map((user, i) => {
    if (user.id === +id) {
      delete productsList[i]
      isProductDeleted = true
    }
  })
  updateJsonStore("products", productsList)
  return isProductDeleted
}
