"use client";

import { ProductProps } from "@/types";
import Image from "next/image";
import StarRating from "./StarRating";
import { colors } from "@/constants";

interface ProductCardProps {
  product: ProductProps;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border flex flex-col items-center p-10">
      <Image
        src={product.image}
        alt="product-image"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "200px", marginBottom: "0.5rem" }}
        className="object-contain"
      />
      <div className="text-[#8D99AE] text-sm">{product.category}</div>
      <div className="text-[#2B2D42] font-bold">{product.title}</div>
      <div className="text-main-red text-lg font-bold">${product.price}</div>
      <div className="flex">
        <StarRating
          rate={product.rating.rate}
          color={colors.mainRed}
          size="0.8rem"
        />
        <div className="text-[#8D99AE] text-xs ml-1">
          {product.rating.count}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
