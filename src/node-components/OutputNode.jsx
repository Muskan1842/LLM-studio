import { Handle } from "@xyflow/react";
import React from "react";

const OutputNode = () => {
  return (
    <div className="node-content">
      <Handle type="source" position="left" className="node-handle" />

      <div className="node-heading">OUTPUT</div>
      <div className="node-desc ">Expect the desired output here.</div>
      <div className="input-label">Output Response</div>
      <input
        type="text"
        placeholder="Output response will be shown here"
        className="input-field"
      ></input>
    </div>
  );
};

export default OutputNode;
