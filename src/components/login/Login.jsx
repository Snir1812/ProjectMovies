import React from "react";
import { useSelector } from "react-redux";
import "./Login.css";

const Login = () => {
  const darkToggle = useSelector((state) => state.theme);

  return (
    <button
      className={darkToggle.darkTheme ? "login-button" : "login-button-dark"}
    >
      Login
    </button>
  );
};

export default Login;
