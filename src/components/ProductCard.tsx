"use client";

import { ProductProps } from "@/types";
import Image from "next/image";
import StarRating from "./StarRating";
import { colors } from "@/constants";
import { AnimationButton } from "@/components";

interface ProductCardProps {
  product: ProductProps;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="border hover:border-main-red hover:border flex flex-col items-center px-10 pt-10 pb-2 flex-1 group">
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
        <div className="text-[#2B2D42] font-bold line-clamp-2">
          {product.title}
        </div>
        <div className="text-main-red text-lg font-bold">${product.price}</div>
        <div className="flex mb-3">
          <StarRating
            rate={product.rating.rate}
            color={colors.mainRed}
            size="0.8rem"
          />
          <div className="text-[#8D99AE] text-xs ml-1">
            {product.rating.count}
          </div>
        </div>
        <div className="mt-auto invisible group-hover:visible">
          <AnimationButton buttonTitle="ADD TO CART"></AnimationButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
