import React from "react";
import "../components/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const navigate = useNavigate();
  const darkToggle = useSelector((state) => state.theme);

  return (
    <div className="login">
      <div className={darkToggle.darkTheme ? "login-form-dark" : "login-form"}>
        <h1>Login Form</h1>
        <input type="text" placeholder="User Name" className=" text-center" />
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
