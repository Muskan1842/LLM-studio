import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ChatButton = () => {
  const isDeployed = useSelector((store) => store.config.isDeployed);

  return (
    <Link to="chat">
      <div
        className={`chat-button ${
          isDeployed ? "bg-[#2563EB]" : "bg-[#2563EB4D] pointer-events-none"
        }`}
      >
        💬
      </div>
    </Link>
  );
};

export default ChatButton;
