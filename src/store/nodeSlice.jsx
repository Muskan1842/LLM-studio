import { createSlice } from "@reduxjs/toolkit";

const nodeSlice = createSlice({
  name: "node",
  initialState: {
    draggingNodeType: null,
    draggingNodeLabel: null,
    nodes: [],
    edges: [],
  },
  reducers: {
    updateDraggingNodeType: (state, action) => {
      state.draggingNodeType = action.payload;
    },
    updateDraggingNodeLabel: (state, action) => {
      state.draggingNodeLabel = action.payload;
    },
    setNodes: (state, action) => {
      state.nodes = action.payload;
    },
    setEdges: (state, action) => {
      state.edges = action.payload;
    },
  },
});

export const {
  updateDraggingNodeType,
  updateDraggingNodeLabel,
  setNodes,
  setEdges,
} = nodeSlice.actions;

export default nodeSlice.reducer;
