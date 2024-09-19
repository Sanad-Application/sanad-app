import { createSlice } from "@reduxjs/toolkit";
import { User } from "~types";

type UIState = {
  snackText: string;
  snackType: "success" | "error" | "info" | "warning";
};

const initialState: UIState = {
  snackText: "",
  snackType: "success",
};

const uiSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    showSnack: (state, action) => {
      return {
        ...state,
        snackText: action.payload.text,
        snackType: action.payload.type,
      };
    },

    hideSnack: (state) => {
      return {
        ...state,
        snackText: "",
      };
    }
  }
});

export const { showSnack, hideSnack } = uiSlice.actions;
export default uiSlice.reducer;
