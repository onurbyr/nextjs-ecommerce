"use client";

import { ProductProps } from "@/types";
import Image from "next/image";
import StarRating from "./StarRating";
import { colors } from "@/constants";
import { AnimationButton } from "@/components";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";

interface ProductCardProps {
  product: ProductProps;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="border hover:border-main-red hover:border flex flex-col items-center pt-10 pb-3 flex-1 group">
      <div className="px-5">
        <Link
          href={`/productDetails/${encodeURIComponent(product.id)}`}
          className="flex flex-col items-center flex-1"
        >
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
        </Link>
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
      </div>
      <div className="mt-auto px-1 md:invisible group-hover:visible">
        <AnimationButton
          buttonTitle="Add to Cart"
          onClick={() => {
            dispatch(addToCart(product));
          }}
        ></AnimationButton>
      </div>
    </div>
  );
};

export default ProductCard;
