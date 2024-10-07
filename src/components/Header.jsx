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
  const edges = useSelector((store) => store.node.edges);
  const [deployButtonText, setDeployButtonText] = useState("Deploy");

  const isDeployButtonEnabled = useSelector(
    (store) => store.config.isDeployButtonEnabled
  );

  const validateWorkflow = () => {
    let returnVal = { isValid: true };

    dispatch(toggleInputError(false));
    dispatch(toggleLlmError(false));
    dispatch(toggleDeployButton(false));

    if (edges.length !== 2) {
      returnVal = {
        isValid: false,
        msg: "Workflow Incomplete",
        desc: "Please ensure all the edges and nodes are connected properly",
      };
    } else if (inputQuery === null || inputQuery === "") {
      returnVal = {
        isValid: false,
        msg: "Error while running the flow",
        desc: "Please ensure the input field is not empty",
      };
      dispatch(toggleInputError(true));
    } else if (Object.values(llmModel).some((value) => !value)) {
      returnVal = {
        isValid: false,
        msg: "Error while running the flow",
        desc: "Please ensure the LLM Engine Configurations are valid.",
      };
      dispatch(toggleLlmError(true));
    }
    return returnVal;
  };

  const HandleRunClick = () => {
    const validInfo = validateWorkflow();
    if (!validInfo.isValid) {
      dispatch(
        toggleToast({
          visible: true,
          error: true,
          msg: validInfo.msg,
          desc: validInfo.desc,
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
      <div className="text-xl font-bold ">OpenAGI</div>
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
