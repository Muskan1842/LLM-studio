import { Handle } from "@xyflow/react";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { updateLlmModel } from "../store/dataSlice";
import { debounce, MODEL_NAMES } from "../utils/constants";

const LLMNode = () => {
  const dispatch = useDispatch();
  let llmModel = {};

  const handleInputChange = (input, key) => {
    console.log(input);

    llmModel[key] = input;
    if (!llmModel.modelName) llmModel.modelName = MODEL_NAMES.GPT_35_TURBO;
    dispatch(updateLlmModel(JSON.parse(JSON.stringify(llmModel))));
  };

  const debouncedInputChange = useCallback(debounce(handleInputChange)); // usecallback

  return (
    <div className="node-content">
      <Handle type="target" position="right" className="node-handle" />
      <Handle type="source" position="left" className="node-handle" />

      <div className="node-heading">LLM ENGINE</div>
      <div className="node-desc ">Configure the required LLM Engine</div>

      <div className="input-label">Model Name</div>
      <select
        type="text"
        placeholder="Type Something"
        className="input-field"
        defaultValue={"gpt-3.5-turbo"}
        onChange={(e) => debouncedInputChange(e.target.value, "modelName")}
      >
        {Object.values(MODEL_NAMES).map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <div className="input-label">OpenAI API Base</div>
      <input
        type="text"
        placeholder="Type Something"
        className="input-field"
        onChange={(e) => debouncedInputChange(e.target.value, "baseLink")}
      ></input>

      <div className="input-label">OpenAI Key</div>
      <input
        type="password"
        placeholder="Type Something"
        className="input-field"
        onChange={(e) => debouncedInputChange(e.target.value, "apiKey")}
      ></input>

      <div className="input-label">Max Tokens</div>
      <input
        type="text"
        placeholder="Type Something"
        className="input-field"
        onChange={(e) => debouncedInputChange(+e.target.value, "maxTokens")}
      ></input>

      <div className="input-label">Temperature</div>
      <input
        type="text"
        placeholder="Type Something"
        className="input-field"
        onChange={(e) => debouncedInputChange(+e.target.value, "temperature")}
      ></input>
    </div>
  );
};

export default LLMNode;
