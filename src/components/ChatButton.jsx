import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ChatButton = () => {
  const isChatButtonEnabled = useSelector(
    (store) => store.config.isChatButtonEnabled
  );

  return (
    <div
      className={`chat-button ${
        isChatButtonEnabled
          ? "bg-[#2563EB]"
          : "bg-[#2563EB4D] pointer-events-none"
      }`}
    >
      <Link to="chat">💬</Link>
    </div>
  );
};

export default ChatButton;
