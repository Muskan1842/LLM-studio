import React from "react";

const Header = () => {
  const onClickRun = () => {
    console.log("run clicked");
    // validate the workflow
    //    connecting input directly to output , not allow
    //    connecting to same node not allowed llm

    // show the output - run the workflow
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
