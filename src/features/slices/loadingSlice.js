import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const accountSlice = createSlice({
  name: "loading",
  initialState,

  reducers: {
    loading: (state) => {
      state.isLoading = true;
    },
    finishedLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { loading, finishedLoading } = accountSlice.actions;

export default accountSlice.reducer;
