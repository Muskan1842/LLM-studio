import "@xyflow/react/dist/style.css";
import Toast from "./Toast";
import Header from "./Header.jsx";
import { ReactFlowProvider } from "@xyflow/react";
import ReactFlowContainer from "./ReactFlowContainer.jsx";
import SidePanel from "./SidePanel.jsx";
import ChatButton from "./ChatButton.jsx";
import appStore from "../store/appStore.jsx";
import { Provider } from "react-redux";

const LandingPage = () => {
  return (
    <Provider store={appStore}>
      <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
        <Toast></Toast>
        <Header></Header>
        <ReactFlowProvider>
          <ReactFlowContainer />
        </ReactFlowProvider>
        <SidePanel />
        <ChatButton />
      </div>
    </Provider>
  );
};

export default LandingPage;
