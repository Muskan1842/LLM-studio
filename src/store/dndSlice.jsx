import { createSlice } from "@reduxjs/toolkit";

const dndSlice = createSlice({
  name: "dnd",
  initialState: {
    nodeType: null,
    nodeLabel: null,
  },
  reducers: {
    updateNodeType: (state, action) => {
      state.nodeType = action.payload;
    },
    updateNodeLabel: (state, action) => {
      state.nodeLabel = action.payload;
    },
  },
});

export const { updateNodeType, updateNodeLabel } = dndSlice.actions;

export default dndSlice.reducer;
