import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    deployedModel: null,
    //chatHistory
    //inputOutput: [{input: 'test', output: 'test'}]
  },
  reducers: {
    updateDeployedModel: (state, action) => {
      state.deployedModel = action.payload;
    },
  },
});

export const { updateDeployedModel } = chatSlice.actions;

export default chatSlice.reducer;
