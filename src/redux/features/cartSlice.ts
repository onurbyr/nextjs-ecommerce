import { ProductProps } from "@/types";
import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export type CartState = {
  cart: ProductProps[];
};

const initialState = {
  cart: [],
} as CartState;

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: () => initialState,
    addToCart: (state, action) => {
      const currentCart = current(state).cart;
      const isAlreadyInCart = currentCart.some(
        (item) => item.id === action.payload.id
      );

      if (isAlreadyInCart) {
        toast.error("Item already in cart");
        return;
      }
      state.cart.push(action.payload);
      toast.success("Item added to cart");
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    emptyCart: (state) => {
      state.cart = initialState.cart;
    },
  },
});

export const { reset, addToCart, removeFromCart, emptyCart } = cart.actions;
export default cart.reducer;
