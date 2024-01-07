"use client";

import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  return (
    <main className="flex flex-col py-10 px-3 xl:px-0 max-width md:flex-row md:justify-between gap-3">
      <div className="border-2 flex flex-col">
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
      {/* <div className="border-2 flex flex-col">page</div> */}
    </main>
  );
};

export default Cart;
