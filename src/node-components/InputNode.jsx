import { Handle } from "@xyflow/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInputQuery } from "../store/dataSlice";

const InputNode = () => {
  const dispatch = useDispatch();
  const showInputError = useSelector((store) => store.config.showInputError);

  const handleInputChange = (e) => {
    dispatch(updateInputQuery(e.target.value));
  };

  return (
    <div className="node-content">
      <Handle type="target" position="right" className="node-handle" />

      <div className="node-heading drag-handle ">
        <div>INPUT</div>
        {showInputError && (
          <div>
            🔴
            <div className="node-error-tooltip">Input is missing input key</div>
          </div>
        )}
      </div>
      <div className="node-desc ">Write the input/question you want to ask</div>
      <div className="input-label">Input</div>
      <input
        onChange={(e) => handleInputChange(e)}
        type="text"
        placeholder="Type your input query"
        className="input-field"
      ></input>
    </div>
  );
};

export default InputNode;
