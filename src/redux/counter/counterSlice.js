import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  totalNotiv: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isLogin = true;
    },
    logoutUser: (state) => {
      state.isLogin = false;
    },
    addTotalNotiv: (state, action) => {
      state.totalNotiv += action.payload;
    },
  },
});

export const { loginUser, logoutUser, addTotalNotiv } = counterSlice.actions;

export default counterSlice.reducer;
