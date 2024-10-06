import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../store/dataSlice";
import dndSlice from "../store/dndSlice";
import configSlice from "../store/configSlice";

const appStore = configureStore({
  reducer: {
    data: dataSlice,
    dnd: dndSlice,
    config: configSlice,
  },
});

export default appStore;
