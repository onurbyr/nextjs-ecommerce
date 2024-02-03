"use client";

import { Button } from "@/components";
import { colors } from "@/constants";
import { emptyCart, removeFromCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import Image from "next/image";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  const [orderCompletedVisible, setOrderCompletedVisible] = useState(false);
  const dispatch = useAppDispatch();

  if (orderCompletedVisible) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center py-20">
        <Image
          src={require("../../assets/order-completed.svg")}
          alt="Order Completed"
          width={170}
          height={70}
          priority
        />
        <div className="text-2xl font-semibold tracking-wider text-main-red">
          Order Completed
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center py-20">
        <p className="text-xl">There are no products in your cart</p>
      </div>
    );
  }
  return (
    <main className="flex flex-col py-10 px-3 xl:px-0 max-width md:flex-row md:justify-between gap-10 w-full">
      <div className="flex flex-col flex-1">
        <table>
          <thead>
            <tr>
              <th className="border bg-main-background text-white border-main-background px-3 py-2">
                Products
              </th>
              <th className="border bg-main-background text-white border-main-background px-3 py-2">
                Price
              </th>
              <th className="border bg-main-background text-white border-main-background px-3 py-2">
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td className="border border-main-background p-3">
                  {item.title}
                </td>
                <td className="border border-main-background p-3">
                  ${item.price.toFixed(2)}
                </td>
                <td className="border border-main-background p-3">
                  <div
                    className="flex justify-center cursor-pointer"
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    <MdDelete size="1.5rem" color={colors.mainRed} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-2 flex flex-col p-5 flex-1 text-sm">
        <div className="text-2xl font-semibold tracking-wider font-mono text-center">
          YOUR ORDER
        </div>
        <div>
          <div className="flex justify-between font-semibold">
            <div>PRODUCT</div>
            <div>Total</div>
          </div>
          {cart.map((item) => (
            <div
              className="flex justify-between mt-1 text-[#333] gap-2"
              key={item.id}
            >
              <div>{item.title}</div>
              <div>${item.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
        <div className=" flex justify-between font-semibold mt-5 items-center">
          <div>TOTAL</div>
          <div className="text-main-red text-2xl">
            ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
          </div>
        </div>
        <Button
          className="mt-3"
          buttonTitle="PLACE ORDER"
          onClick={() => {
            dispatch(emptyCart());
            setOrderCompletedVisible(true);
          }}
        ></Button>
      </div>
    </main>
  );
};

export default Cart;
