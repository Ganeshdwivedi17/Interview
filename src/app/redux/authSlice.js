import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogedIn: false,
    isAdmin: false,
    user: null,
  },
  reducers: {
    UserLogin: (state, action) => {
      state.isLogedIn = true;
      state.isAdmin = action.payload.isAdmin;
      state.user = {
        token: action.payload.token,
      };
    },
    UserLogout: (state) => {
      state.isLogedIn = false;
      state.user = null;
    },
  },
});

export const { UserLogin, UserLogout } = authSlice.actions;
export default authSlice.reducer;
