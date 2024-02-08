"use client";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    // Add to cart
    addtocart: (state, action) => {
      state.push(action.payload);
    },

    // Remove from cart
    removefromcart: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    },
  },
});

export const { addtocart, removefromcart } = cartSlice.actions;
export default cartSlice.reducer;
