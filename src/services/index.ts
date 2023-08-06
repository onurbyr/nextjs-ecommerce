import { get } from "./requests";

export async function getAllProducts() {
  return await get("products");
}
