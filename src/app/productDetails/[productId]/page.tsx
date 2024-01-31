"use client";

import { useAppDispatch } from "@/redux/hooks";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getProduct } from "@/services";
import { ProductProps } from "@/types";
import { AnimationButton, LoadingIndicator, StarRating } from "@/components";
import { colors } from "@/constants";
import { addToCart } from "@/redux/features/cartSlice";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    handleGetProduct();
  }, []);

  const handleGetProduct = async () => {
    const res = await getProduct(params.productId);
    setProduct(res);
    setLoading(false);
  };

  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center py-60">
        <LoadingIndicator />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-1 items-center justify-center py-60">
        <p className="text-xl">Product not found</p>
      </div>
    );
  }

  return (
    <main className="flex flex-col py-10 px-3 xl:px-0 max-width md:flex-row md:justify-between gap-10 w-full">
      <Image
        src={product.image}
        alt="product-image"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "200px", marginBottom: "0.5rem" }}
        className="object-contain flex md:flex-1"
      />
      <div className="flex flex-col flex-1 gap-2">
        <div className="text-xl font-semibold font-mono">{product.title}</div>
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
        <div className="text-main-red text-2xl">
          ${product.price.toFixed(2)}
        </div>
        <div>{product.description}</div>
        <div className="flex">
          <div className="mr-1 text-secondary-text">Category:</div>
          <div>{product.category}</div>
        </div>
        <div className="flex my-2">
          <AnimationButton
            buttonTitle="ADD TO CART"
            onClick={() => {
              dispatch(addToCart(product));
            }}
          ></AnimationButton>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
