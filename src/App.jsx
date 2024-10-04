import "@xyflow/react/dist/style.css";
import Header from "./components/Header.jsx";
import ReactFlowContainer from "./components/ReactFlowContainer.jsx";
import DNDContext from "./utils/DndContext.jsx";
import { useEffect, useState } from "react";
import SidePanel from "./components/SidePanel.jsx";
import { ReactFlowProvider } from "@xyflow/react";

export default function App() {
  const [type, setType] = useState("default");
  const [nodeLabel, setNodeLabel] = useState("default");

  return (
    <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <DNDContext.Provider
        value={{
          type,
          setType: setType,
          nodeLabel,
          setNodeLabel: setNodeLabel,
        }}
      >
        <Header></Header>
        <ReactFlowProvider>
          <ReactFlowContainer />
        </ReactFlowProvider>
        <SidePanel />
      </DNDContext.Provider>
    </div>
  );
}
