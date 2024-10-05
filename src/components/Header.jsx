import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOutputResponse } from "../store/dataSlice";
import { generateResponse } from "../utils/openai-config";

const Header = () => {
  const dispatch = useDispatch();
  const inputQuery = useSelector((store) => store.data.inputQuery);
  const llmModel = useSelector((store) => store.data.llmModel);

  const onClickRun = () => {
    // validate the workflow
    //    connecting input directly to output , not allow
    //    connecting to same node not allowed llm
    //    input should not be null
    //    llm values none of them should be null

    console.log(llmModel);
    generateResponse(inputQuery, llmModel).then((res) => {
      dispatch(updateOutputResponse(res));
    });
  };

  return (
    <div className="header">
      <div>Logo</div>
      <div>
        <button className="header-button-deploy">Deploy</button>
        <button className="header-button-run" onClick={onClickRun}>
          Run
        </button>
      </div>
    </div>
  );
};

export default Header;
