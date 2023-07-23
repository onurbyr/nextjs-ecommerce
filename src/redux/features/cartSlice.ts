import { createSlice } from "@reduxjs/toolkit";

type CartState = {
  value: number;
};

const initialState = {
  value: 0,
} as CartState;

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment, reset } = cart.actions;
export default cart.reducer;
