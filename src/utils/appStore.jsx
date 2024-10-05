import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import dndSlice from "./dndSlice";

const appStore = configureStore({
  reducer: {
    data: dataSlice,
    dnd: dndSlice,
  },
});

export default appStore;
