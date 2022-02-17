import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: "",
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  lastLogin: "",
  refreshToken: "",
  orders: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signin: (state, action) => {
      state = action.payload;
    },
    signout: (state, action) => {
      state = initialState;
    },
  },
});

export const { signin, signout } = userSlice.actions;

export default userSlice.reducer;
