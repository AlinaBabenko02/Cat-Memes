import { configureStore } from "@reduxjs/toolkit";
import memesReducer from "./memes";

export const store = configureStore({
  reducer: {
    memes: memesReducer,
  },
});
