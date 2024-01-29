"use client";

import { useAppDispatch } from "@/redux/hooks";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getProduct } from "@/services";
import { ProductProps } from "@/types";
import { LoadingIndicator } from "@/components";

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
        className="object-contain"
      />
      <div>{product.description}</div>
    </main>
  );
};

export default ProductDetails;
