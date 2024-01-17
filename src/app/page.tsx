import { HomeContent } from "@/components";
import { getAllCategories, getAllProducts } from "@/services";

export default async function Home() {
  const allProducts = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <main className="flex min-h-screen flex-col p-5 max-width">
      <HomeContent products={allProducts} categories={categories} />
    </main>
  );
}
