import React, { useRef, useState } from "react";
import { generateResponse } from "../utils/openai-config";
import { useSelector } from "react-redux";

const ChatBox = () => {
  const inputRef = useRef();
  const llmModel = useSelector((store) => store.data.llmModel);
  const [output, setOutput] = useState("");

  const handleSearch = (e) => {
    generateResponse(inputRef.current.value, llmModel).then((res) => {
      setOutput(res);
    });
  };

  return (
    <div className="bg-white my-10 mr-10 rounded-xl w-[100%] flex flex-col border-[1px] border-[#F0F2F5] justify-between">
      <div className="border-b-2 border-b-[#F0F2F5] p-6 flex justify-center text-2xl font-smeibold">
        AI Assistant
      </div>
      <div className="flex overflow-y-auto ">
        {output && (
          <div className="bg-[#F7F8FA] my-10 w-[70%] rounded-xl p-6 mx-20 border-[#F0F2F5] border-[1px]">
            {output}
          </div>
        )}
      </div>
      <div className="mb-6 mx-20 flex justify-stretch border-2 border-[#0000000A] shadow-lg rounded-lg">
        <input ref={inputRef} className="h-16 p-4 w-[900px] flex-1"></input>
        <button
          className="px-8  py-4  border-l-2"
          onClick={(e) => handleSearch(e)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
