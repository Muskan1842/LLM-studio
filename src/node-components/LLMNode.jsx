import { Handle } from "@xyflow/react";
import React from "react";

const LLMNode = ({ input }) => {
  console.log(input);
  return (
    <div className="node-content">
      <Handle type="target" position="right" className="node-handle" />
      <Handle type="source" position="left" className="node-handle" />

      <div className="node-heading">LLM ENGINE</div>
      <div className="node-desc ">Configure the required LLM Engine</div>

      <div className="input-label">Model Name</div>
      <input
        type="text"
        placeholder="Type Something"
        className="input-field"
      ></input>

      <div className="input-label">OpenAI API Base</div>
      <input
        type="text"
        placeholder="Type Something"
        className="input-field"
      ></input>

      <div className="input-label">OpenAI Key</div>
      <input
        type="text"
        placeholder="Type Something"
        className="input-field"
      ></input>

      <div className="input-label">Max Tokens</div>
      <input
        type="text"
        placeholder="Type Something"
        className="input-field"
      ></input>

      <div className="input-label">Temperature</div>
      <input
        type="text"
        placeholder="Type Something"
        className="input-field"
      ></input>
    </div>
  );
};

export default LLMNode;
