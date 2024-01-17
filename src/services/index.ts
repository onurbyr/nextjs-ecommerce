import { get } from "./requests";

export async function getAllProducts() {
  return await get("products");
}

export async function getAllCategories() {
  return await get("products/categories");
}

export async function getProductsInCategory(category: string) {
  if (!category) {
    return getAllProducts();
  }
  return await get(`products/category/${category}`);
}
