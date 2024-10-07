import { Handle } from "@xyflow/react";
import React from "react";
import { useSelector } from "react-redux";

const OutputNode = () => {
  const outputResponse = useSelector((store) => store.data.outputResponse);
  return (
    <div className="node-content">
      <Handle type="source" position="left" className="node-handle" />

      <div className="node-heading drag-handle">OUTPUT</div>
      <div className="node-desc">Expect the desired output here.</div>
      <div className="input-label">Output Response</div>
      <p
        className={`input-field flex flex-wrap text-left ${
          outputResponse ? "" : "text-[#666666bb]"
        }`}
      >
        {outputResponse ? outputResponse : "Output response will be shown here"}
      </p>
    </div>
  );
};

export default OutputNode;
