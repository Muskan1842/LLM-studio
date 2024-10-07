import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    toastInfo: {
      visible: false,
      msg: null,
      desc: null,
    },
    showInputError: false,
    showLlmError: false,
    isDeployButtonEnabled: false,
    isDeployed: false,
  },
  reducers: {
    toggleToast: (state, action) => {
      state.toastInfo = action.payload;
    },
    toggleInputError: (state, action) => {
      state.showInputError = action.payload;
    },
    toggleLlmError: (state, action) => {
      state.showLlmError = action.payload;
    },
    toggleDeployButton: (state, action) => {
      state.isDeployButtonEnabled = action.payload;
    },
    toggleDeployedState: (state, action) => {
      state.isDeployed = !state.isDeployed;
    },
  },
});

export const {
  toggleToast,
  toggleInputError,
  toggleLlmError,
  toggleDeployButton,
  toggleDeployedState,
} = configSlice.actions;

export default configSlice.reducer;
