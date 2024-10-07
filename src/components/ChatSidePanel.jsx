import React from "react";
import { useSelector } from "react-redux";

const ChatSidePanel = () => {
  const deployedModel = useSelector((store) => store.chat.deployedModel);
  return (
    <div>
      <div className="text-xl font-bold flex justify-center">Planet AI</div>
      <div className="text-lg my-10 text-gray-500 ">
        <div className="text-xl my-4 flex justify-center font-bold">
          LLM Model Configurations
        </div>
        <div>LLM Model: {deployedModel?.modelName}</div>
        <div>Base Link: {deployedModel?.baseLink}</div>
        <div>Max Tokens: {deployedModel?.maxTokens}</div>
        <div>Temperature: {deployedModel?.temperature}</div>
      </div>
    </div>
  );
};

export default ChatSidePanel;
