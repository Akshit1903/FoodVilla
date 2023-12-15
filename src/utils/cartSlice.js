import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.card.info.id !== action.payload
      );
    },
    emptyCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addCartItem, removeCartItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
