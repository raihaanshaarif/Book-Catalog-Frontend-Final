import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
type IUser = {
  _id?: string;
  email: string;
  password: string;
};

type AuthState = {
  user: IUser | null;
  token: string | null;
};
const initialState: AuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, token },
      }: PayloadAction<{ user: IUser | null; token: string }>
    ) => {
      state.user = user;
      state.token = token;
      // console.log(token, user);

      const data = JSON.stringify({ user, token });
      localStorage.setItem("setCredentials", data);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("setCredentials");
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
