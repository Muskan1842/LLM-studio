import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../store/dataSlice";
import nodeSlice from "../store/nodeSlice";
import configSlice from "../store/configSlice";
import chatSlice from "../store/chatSlice";

const appStore = configureStore({
  reducer: {
    data: dataSlice,
    node: nodeSlice,
    config: configSlice,
    chat: chatSlice,
  },
});

export default appStore;
