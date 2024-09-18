import { createSlice } from "@reduxjs/toolkit";
import { User } from "~types";

type AuthState = {
  token: string | null;
  user: User | null;
  isLawyer: boolean;
};

const initialState: AuthState = {
  token: null,
  user: null,
  isLawyer: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      return {...state, token: action.payload.token}
    },

    setUser: (state, action) => {
      return {...state, user: action.payload.user}
    },

    setType: (state, action) => {
      return {...state, isLawyer: action.payload.isLawyer}
    },

    logout: () => {
      return initialState;
    },
  },
});

export const { setToken, setUser, logout, setType } = authSlice.actions;
export default authSlice.reducer;
