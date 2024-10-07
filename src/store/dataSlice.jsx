import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    inputQuery: null,
    outputResponse: null,
    llmModel: {
      modelName: "gpt-3.5-turbo",
      baseLink: null,
      apiKey: null,
      maxTokens: null,
      temperature: null,
    },
  },
  reducers: {
    updateInputQuery: (state, action) => {
      state.inputQuery = action.payload;
    },
    updateOutputResponse: (state, action) => {
      state.outputResponse = action.payload;
    },
    updateLlmModel: (state, action) => {
      const { key, value } = action.payload;
      state.llmModel[key] = value;
    },
  },
});

export const { updateInputQuery, updateOutputResponse, updateLlmModel } =
  dataSlice.actions;

export default dataSlice.reducer;
