import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOutputResponse } from "../store/dataSlice";
import { generateResponse } from "../utils/openai-config";
import { toggleToast } from "../store/configSlice";
import { updateDeployedModel } from "../store/chatSlice";

const Header = () => {
  const dispatch = useDispatch();
  const inputQuery = useSelector((store) => store.data.inputQuery);
  const llmModel = useSelector((store) => store.data.llmModel);

  const validateWorkflow = () => {
    if (inputQuery === null || inputQuery === "")
      throw Error("Input field is Empty");
    if (Object.values(llmModel).some((value) => value === null))
      throw Error("Please fill all the fields in LLM Model Configurations");
  };

  const HandleRunClick = () => {
    validateWorkflow();

    //fetch response from OpenAi
    generateResponse(inputQuery, llmModel).then((res) => {
      dispatch(updateOutputResponse(res));
    });

    dispatch(toggleToast());
  };

  const handleDeployClick = () => {
    dispatch(updateDeployedModel(llmModel));
  };

  return (
    <div className="header">
      <div>Logo</div>
      <div>
        <button className="header-button-deploy" onClick={handleDeployClick}>
          Deploy
        </button>
        <button className="header-button-run" onClick={HandleRunClick}>
          Run
        </button>
      </div>
    </div>
  );
};

export default Header;
