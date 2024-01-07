"use client";

import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  if (cart.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-xl">There are no products in your cart</p>
      </div>
    );
  }
  return (
    <main className="flex flex-col py-10 px-3 xl:px-0 max-width md:flex-row md:justify-between gap-3 w-full">
      <div className="flex flex-col">
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
                    onClick={() => console.log(item.id)}
                  >
                    <MdDelete size="1.5rem" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-2 flex flex-col">Cart Summary</div>
    </main>
  );
};

export default Cart;
