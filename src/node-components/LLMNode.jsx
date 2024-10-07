import { Handle } from "@xyflow/react";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLlmModel } from "../store/dataSlice";
import { debounce, MODEL_NAMES } from "../utils/constants";

const LLMNode = () => {
  const dispatch = useDispatch();
  const showLlmError = useSelector((store) => store.config.showLlmError);

  const handleInputChange = useCallback(
    (input, key) => {
      dispatch(updateLlmModel({ key: key, value: input }));
    },
    [dispatch]
  );

  const debouncedInputChange = useCallback(debounce(handleInputChange), [
    handleInputChange,
  ]);

  return (
    <div className="node-content">
      <Handle type="target" position="right" className="node-handle" />
      <Handle type="source" position="left" className="node-handle" />

      <div className="node-heading drag-handle">
        <div>LLM ENGINE</div>
        {showLlmError && (
          <div>
            🔴
            <div className="node-error-tooltip">
              Please fill all the fields correctly
            </div>
          </div>
        )}
      </div>
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
        placeholder="https://api.example.com/..."
        className="input-field"
        onChange={(e) => debouncedInputChange(e.target.value, "baseLink")}
      ></input>

      <div className="input-label">OpenAI Key</div>
      <input
        type="password"
        placeholder="Open AI Key"
        className="input-field"
        onChange={(e) => debouncedInputChange(e.target.value, "apiKey")}
      ></input>

      <div className="input-label">Max Tokens</div>
      <input
        type="number"
        placeholder="Example: 200"
        className="input-field"
        onChange={(e) => debouncedInputChange(+e.target.value, "maxTokens")}
      ></input>

      <div className="input-label">Temperature</div>
      <input
        type="number"
        placeholder="Example: 0.5"
        className="input-field"
        onChange={(e) => debouncedInputChange(+e.target.value, "temperature")}
      ></input>
    </div>
  );
};

export default LLMNode;
