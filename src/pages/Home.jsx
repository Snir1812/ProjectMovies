import React from "react";
import "../components/GeneralPageCss.css";
import { useSelector } from "react-redux";

const Home = () => {
  const darkToggle = useSelector((state) => state.theme);

  return (
    <div
      className={
        darkToggle.darkTheme
          ? "container general-page-dark"
          : "container general-page"
      }
    >
      Home
    </div>
  );
};

export default Home;
