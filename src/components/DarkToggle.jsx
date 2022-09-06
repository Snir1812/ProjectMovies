import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/theme/theme-slice";

const DarkToggle = () => {
  const dispatch = useDispatch();
  const darkToggle = useSelector((state) => state.theme);

  return (
    <div className="form-check form-switch form-check-reverse">
      <input
        type="checkbox"
        className="form-check-input"
        id="flexSwitchCheckReverse"
        onClick={() => {
          dispatch(toggleTheme());
        }}
      />
      <label
        htmlFor="flexSwitchCheckReverse"
        className={
          darkToggle.darkTheme ? "form-check-label white" : "form-check-label"
        }
      >
        Dark Mode
      </label>
    </div>
  );
};

export default DarkToggle;
