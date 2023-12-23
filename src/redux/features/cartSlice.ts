import { ProductProps } from "@/types";
import { createSlice, current } from "@reduxjs/toolkit";

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
        return;
      }
      state.cart.push(action.payload);
    },
  },
});

export const { reset, addToCart } = cart.actions;
export default cart.reducer;
