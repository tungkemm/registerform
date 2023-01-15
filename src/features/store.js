import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./slices/accountSlice";
import loadingSlice from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    account: accountSlice,
    loading: loadingSlice
  },
});
