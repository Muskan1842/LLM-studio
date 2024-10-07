import { useDispatch } from "react-redux";
import {
  updateDraggingNodeLabel,
  updateDraggingNodeType,
} from "../store/nodeSlice.jsx";

const SidePanel = () => {
  const dispatch = useDispatch();

  const onDragStart = (event, nodeType, nodeLabel) => {
    dispatch(updateDraggingNodeType(nodeType));
    dispatch(updateDraggingNodeLabel(nodeLabel));

    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="side-panel">
      <div className="text-xl font-semibold"> Components </div>
      <div className="my-[21px] border-[1px]"></div>
      <div className="text-[#444444] opacity-50">Drag and Drop</div>

      <div
        className="panel-node input"
        onDragStart={(event) => onDragStart(event, "input", "Input")}
        draggable
      >
        Input
      </div>
      <div
        className="panel-node"
        onDragStart={(event) => onDragStart(event, "default", "LLM Engine")}
        draggable
      >
        LLM Engine
      </div>
      <div
        className="panel-node output"
        onDragStart={(event) => onDragStart(event, "output", "Output")}
        draggable
      >
        Output
      </div>
    </div>
  );
};

export default SidePanel;
