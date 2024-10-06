import React from "react";
import { Link } from "react-router-dom";

const ChatButton = () => {
  return (
    <Link to="chat">
      <div className="text-xl fixed bottom-14 right-10 cursor-pointer p-3 rounded-full bg-[#2563EB]">
        💬
      </div>
    </Link>
  );
};

export default ChatButton;
