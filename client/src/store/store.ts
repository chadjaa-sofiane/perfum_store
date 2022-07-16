import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./shop/shopSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});

export type State = ReturnType<typeof store.getState>;;