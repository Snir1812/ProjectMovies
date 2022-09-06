import React from "react";
import "./Footer.css";
import { useSelector } from "react-redux";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { ImTelegram } from "react-icons/im";

const Footer = () => {
  const darkToggle = useSelector((state) => state.theme);

  const iconStyle = { fontSize: "30px" };
  const iconStyleDark = { fontSize: "30px", color: "white" };

  return (
    <footer className={darkToggle.darkTheme ? "footer-dark" : "footer"}>
      <ul className="icons-list">
        <li className="icon">
          <BsFacebook
            style={darkToggle.darkTheme ? iconStyleDark : iconStyle}
          />
        </li>
        <li className="icon">
          <IoLogoWhatsapp
            style={darkToggle.darkTheme ? iconStyleDark : iconStyle}
          />
        </li>
        <li className="icon">
          <AiFillTwitterCircle
            style={darkToggle.darkTheme ? iconStyleDark : iconStyle}
          />
        </li>
        <li className="icon">
          <AiFillInstagram
            style={darkToggle.darkTheme ? iconStyleDark : iconStyle}
          />
        </li>
        <li className="icon">
          <ImTelegram
            style={darkToggle.darkTheme ? iconStyleDark : iconStyle}
          />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
