import "@xyflow/react/dist/style.css";
import Header from "./components/Header.jsx";
import ReactFlowContainer from "./components/ReactFlowContainer.jsx";
import { useEffect, useState } from "react";
import SidePanel from "./components/SidePanel.jsx";
import { ReactFlowProvider } from "@xyflow/react";
import appStore from "./store/appStore.jsx";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={appStore}>
      <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
        <Header></Header>
        <ReactFlowProvider>
          <ReactFlowContainer />
        </ReactFlowProvider>
        <SidePanel />
      </div>
    </Provider>
  );
}
