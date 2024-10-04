import { Handle } from "@xyflow/react";
import React from "react";

const InputNode = () => {
  return (
    <div className="node-content">
      <Handle type="target" position="right" className="node-handle" />

      <div className="node-heading"> INPUT</div>
      <div className="node-desc ">Write the input/question you want to ask</div>
      <div className="input-label">Input</div>
      <input
        type="text"
        placeholder="Type Something"
        className="input-field"
      ></input>
    </div>
  );
};

export default InputNode;
