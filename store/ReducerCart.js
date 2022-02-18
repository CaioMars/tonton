import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    subtotal: 0,
    delivery: 0,
    discount: 0,
    total: 0,
  },
  reducers: {
    add: (state, action) => {
      const { payload } = action;
      state.subtotal += payload.price * payload.quantity;
      state.total = state.subtotal + state.delivery - state.discount;
      state.items.push(payload);
    },
    remove: (state, action) => {
      const item = state.items[action.payload];
      if (typeof item === "undefined") return;
      state.subtotal -= item.price * item.quantity;
      state.total = state.subtotal + state.delivery - state.discount;
      state.items = state.items.filter(
        (item, index) => index !== action.payload
      );
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
