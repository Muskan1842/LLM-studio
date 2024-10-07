import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleToast } from "../store/configSlice";

const Toast = () => {
  const toastInfo = useSelector((store) => store.config.toastInfo);
  const dispatch = useDispatch();
  return (
    toastInfo.visible && (
      <div
        className={`toast ${toastInfo.error ? "bg-[#FF5353]" : "bg-[#0FA958]"}`}
        aria-live="assertive"
      >
        <div className="flex">
          <div className="">
            <div className="text-lg font-semibold">{toastInfo.msg}</div>
            <div className="text-xs">{toastInfo.desc}</div>
          </div>
        </div>
        <div
          className="ml-4 text-xs cursor-pointer"
          onClick={() => {
            dispatch(toggleToast(false));
          }}
        >
          x
        </div>
      </div>
    )
  );
};

export default Toast;
