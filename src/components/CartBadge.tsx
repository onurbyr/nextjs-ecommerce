import React from "react";

interface CartBadgeProps {
  count: number;
}

const CartBadge = ({ count }: CartBadgeProps) => {
  return (
    <div className="bg-main-red w-5 h-5 rounded-full flex justify-center items-center text-main-text text-xs absolute -top-2 right-1">
      {count}
    </div>
  );
};

export default CartBadge;
