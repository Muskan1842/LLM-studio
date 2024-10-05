import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOutputResponse } from "../utils/dataSlice";

const Header = () => {
  const dispatch = useDispatch();
  const inputQuery = useSelector((store) => store.data.inputQuery);

  const onClickRun = () => {
    console.log("run clicked");
    // validate the workflow
    //    connecting input directly to output , not allow
    //    connecting to same node not allowed llm

    // show the output - run the workflow

    //access inputQuery
    console.log(inputQuery);

    //llm engine call and get the output

    //dispatching output response
    dispatch(updateOutputResponse("some Random Text"));
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
