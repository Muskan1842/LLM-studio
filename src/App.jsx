import "@xyflow/react/dist/style.css";
import Header from "./components/Header.jsx";
import ReactFlowContainer from "./components/ReactFlowContainer.jsx";
import { useEffect, useState } from "react";
import SidePanel from "./components/SidePanel.jsx";
import { ReactFlowProvider } from "@xyflow/react";
import appStore from "./store/appStore.jsx";
import { Provider } from "react-redux";
import Toast from "./components/Toast.jsx";

export default function App() {
  return (
    <Provider store={appStore}>
      <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
        <Toast
          msg={"Flow ran successfully"}
          desc={"Your workflow is ready to be deployed"}
        ></Toast>
        <Header></Header>
        <ReactFlowProvider>
          <ReactFlowContainer />
        </ReactFlowProvider>
        <SidePanel />
      </div>
    </Provider>
  );
}
