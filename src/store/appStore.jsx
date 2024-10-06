import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../store/dataSlice";
import dndSlice from "../store/dndSlice";
import configSlice from "../store/configSlice";
import chatSlice from "../store/chatSlice";

const appStore = configureStore({
  reducer: {
    data: dataSlice,
    dnd: dndSlice,
    config: configSlice,
    chat: chatSlice,
  },
});

export default appStore;
