import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    isToastVisible: false,
  },
  reducers: {
    toggleToast: (state) => {
      state.isToastVisible = !state.isToastVisible;
    },
  },
});

export const { toggleToast } = configSlice.actions;

export default configSlice.reducer;
