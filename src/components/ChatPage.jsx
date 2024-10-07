import React from "react";
import ChatBox from "./ChatBox";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import { Link } from "react-router-dom";
import ChatSidePanel from "./ChatSidePanel";

const ChatPage = () => {
  return (
    <Provider store={appStore}>
      <div className="flex h-screen bg-[#FAFAFB]">
        <div className=" w-96 flex flex-col justify-between items-center py-16 ">
          <ChatSidePanel />
          <Link to="/">
            <button className="bg-gray-300 text-lg p-4 rounded-md font-semibold">
              Back to Test Bench
            </button>
          </Link>
        </div>
        <ChatBox></ChatBox>
      </div>
    </Provider>
  );
};

export default ChatPage;
