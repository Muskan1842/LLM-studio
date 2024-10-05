import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../store/dataSlice";
import dndSlice from "../store/dndSlice";

const appStore = configureStore({
  reducer: {
    data: dataSlice,
    dnd: dndSlice,
  },
});

export default appStore;
