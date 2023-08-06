import { ProductCard } from "@/components";
import { getAllProducts } from "@/services";
import { ProductProps } from "@/types";

export default async function Home() {
  const allProducts = await getAllProducts();
  return (
    <main className="flex min-h-screen flex-col p-5 max-width">
      <div className="product-card-wrapper">
        {allProducts?.map((product: ProductProps) => (
          <ProductCard product={product} />
        ))}
      </div>
    </main>
  );
}
