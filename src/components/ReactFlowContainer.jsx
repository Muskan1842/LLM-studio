import {
  ReactFlow,
  Controls,
  Background,
  addEdge,
  BackgroundVariant,
  useReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
} from "@xyflow/react";
import { useCallback } from "react";
import { NODE_TYPES } from "../utils/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { setEdges, setNodes } from "../store/nodeSlice.jsx";

const ReactFlowContainer = () => {
  const dispatch = useDispatch();
  const nodes = useSelector((store) => store.node.nodes);
  const edges = useSelector((store) => store.node.edges);
  const { screenToFlowPosition } = useReactFlow(); //ReVisit
  const node = useSelector((store) => store.node);

  const isValidConnection = (connection) => {
    if (connection.target.includes("input")) {
      return !connection.source.includes("output");
    } else {
      return !connection.target.includes(connection.source);
    }
  };

  const onConnect = useCallback(
    (params) => dispatch(setEdges(addEdge(params, edges))),
    [dispatch, edges]
  );

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      if (!node.draggingNodeType) return;

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: node.draggingNodeType,
        type: node.draggingNodeType,
        dragHandle: ".drag-handle",
        position,
        data: { label: node.draggingNodeLabel },
        style: { width: 325 },
      };

      dispatch(setNodes([...nodes, newNode]));
    },
    [node, screenToFlowPosition, nodes, dispatch]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={(changes) =>
          dispatch(setNodes(applyNodeChanges(changes, nodes)))
        }
        onEdgesChange={(changes) =>
          dispatch(setEdges(applyEdgeChanges(changes, edges)))
        }
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={NODE_TYPES}
        isValidConnection={isValidConnection}
      >
        <Controls className="!left-[330px]" />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default ReactFlowContainer;
