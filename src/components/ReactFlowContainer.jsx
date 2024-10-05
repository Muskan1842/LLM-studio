import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  useReactFlow,
} from "@xyflow/react";
import { useCallback, useRef } from "react";
import { NODE_TYPES } from "../utils/constants.js";
import { useSelector } from "react-redux";

const ReactFlowContainer = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow(); //ReVisit
  const dnd = useSelector((store) => store.dnd);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const id = useRef(0);
  const getId = () => `dndnode_${id.current++}`;

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      if (!dnd.nodeType) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: getId(),
        type: dnd.nodeType,
        position,
        data: { label: dnd.nodeLabel },
        style: { width: 325 },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [dnd, screenToFlowPosition, setNodes]
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
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={NODE_TYPES}
      >
        <Controls className="!left-[330px]" />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default ReactFlowContainer;
