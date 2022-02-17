import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./ReducerCart";
import userReducer from "./ReducerUser";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
