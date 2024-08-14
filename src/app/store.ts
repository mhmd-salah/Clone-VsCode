import { configureStore } from "@reduxjs/toolkit";
import fileTree from "./features/fileTree";

export const store = configureStore({
  reducer: {
    fileTreeSlice: fileTree,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
