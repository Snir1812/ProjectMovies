import React from "react";
import { useSelector } from "react-redux";
import "./LoginButton.css";
import { useNavigate } from "react-router-dom";
import { Overlay } from "react-bootstrap";

const Login = () => {
  const darkToggle = useSelector((state) => state.theme);
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(`/login`);
      }}
      className={darkToggle.darkTheme ? "login-button" : "login-button-dark"}
    >
      Login
    </button>
  );
};

export default Login;
