import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./ReducerCart";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
