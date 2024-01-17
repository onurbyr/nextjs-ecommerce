"use client";

import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";
import { ProductProps } from "@/types";
import { getProductsInCategory } from "@/services";

interface HomeContentProps {
  products: ProductProps[];
  categories: string[];
}

const HomeContent = ({ products, categories }: HomeContentProps) => {
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [data, setData] = useState<ProductProps[]>(products);

  const handleCategoryChange = async (categoryName: string) => {
    const data = await getProductsInCategory(categoryName);
    setData(data);
    setCurrentCategory(categoryName);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-5">
        {categories?.map((categoryName: string) => (
          <CategoryCard
            key={categoryName}
            categoryName={categoryName}
            onClick={handleCategoryChange}
            isSelected={currentCategory === categoryName}
            onCategoryClear={() => handleCategoryChange("")}
          />
        ))}
      </div>
      <div className="product-card-wrapper">
        {data?.map((product: ProductProps) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default HomeContent;
