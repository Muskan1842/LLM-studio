import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOutputResponse } from "../store/dataSlice";
import { generateResponse } from "../utils/openai-config";
import {
  toggleChatButton,
  toggleDeployButton,
  toggleInputError,
  toggleLlmError,
  toggleToast,
} from "../store/configSlice";
import { updateDeployedModel } from "../store/chatSlice";

const Header = () => {
  const dispatch = useDispatch();
  const inputQuery = useSelector((store) => store.data.inputQuery);
  const llmModel = useSelector((store) => store.data.llmModel);
  const [deployButtonText, setDeployButtonText] = useState("Deploy");

  const isDeployButtonEnabled = useSelector(
    (store) => store.config.isDeployButtonEnabled
  );

  const validateWorkflow = () => {
    dispatch(toggleInputError(false));
    dispatch(toggleLlmError(false));
    dispatch(toggleDeployButton(false));
    let returnVal = true;

    if (inputQuery === null || inputQuery === "") {
      dispatch(toggleInputError(true));
      returnVal = false;
    }
    if (Object.values(llmModel).some((value) => value === null)) {
      dispatch(toggleLlmError(true));
      returnVal = false;
    }
    return returnVal;
  };

  const HandleRunClick = () => {
    if (!validateWorkflow()) {
      dispatch(
        toggleToast({
          visible: true,
          error: true,
          msg: "Error while running the flow",
          desc: "Please verify the all the inputs before running the flow",
        })
      );
      return;
    }

    //fetch response from OpenAi
    generateResponse(inputQuery, llmModel)
      .then((res) => {
        dispatch(updateOutputResponse(res));
        dispatch(toggleDeployButton(true));
        dispatch(
          toggleToast({
            visible: true,
            error: false,
            msg: "Flow ran Successfully",
            desc: "Your workflow is ready to be deployed",
          })
        );
      })
      .catch((error) => {
        dispatch(
          toggleToast({
            visible: true,
            error: true,
            msg: "Error while requesting response",
            desc: "Please ensure Model Name, Base Link and API Key are valid",
          })
        );
        dispatch(toggleDeployButton(false));
      });
  };

  const handleDeployClick = () => {
    // setDeployButtonText("Undeploy");
    dispatch(updateDeployedModel(llmModel));
    dispatch(
      toggleToast({
        visible: true,
        error: false,
        msg: "Deployed Successfully",
        desc: "Your can now chat with the AI Assistant!",
      })
    );
    dispatch(toggleChatButton(true));
  };

  return (
    <div className="header">
      <div>Logo</div>
      <div>
        <button
          disabled={!isDeployButtonEnabled}
          className={`header-button-deploy ${
            isDeployButtonEnabled ? "bg-black" : "bg-[#0000004d]"
          }`}
          onClick={handleDeployClick}
        >
          {deployButtonText}
        </button>
        <button className="header-button-run" onClick={HandleRunClick}>
          Run
        </button>
      </div>
    </div>
  );
};

export default Header;
