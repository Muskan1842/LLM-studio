import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleToast } from "../store/configSlice";

const Toast = ({ msg, desc }) => {
  const isToastVisible = useSelector((store) => store.config.isToastVisible);
  const dispatch = useDispatch();
  return (
    isToastVisible && (
      <div className="toast" aria-live="assertive">
        <div
          className="self-end text-xs cursor-pointer"
          onClick={() => {
            dispatch(toggleToast());
          }}
        >
          x
        </div>
        <div className="flex">
          <div> icon</div>
          <div className="ml-3">
            <div className="text-lg font-semibold">{msg}</div>
            <div className="text-xs">{desc}</div>
          </div>
        </div>
      </div>
    )
  );
};

export default Toast;
