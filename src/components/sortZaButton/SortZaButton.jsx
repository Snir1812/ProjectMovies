import React from "react";
import { BsSortAlphaUp } from "react-icons/bs";
import "./SortZaButton.css";
import { useSelector } from "react-redux";

const SortZaButton = () => {
  const darkToggle = useSelector((state) => state.theme);

  return (
    <button className="za-button">
      <BsSortAlphaUp
        className="za-icon"
        color={darkToggle.darkTheme ? "white" : "black"}
      />
    </button>
  );
};

export default SortZaButton;
