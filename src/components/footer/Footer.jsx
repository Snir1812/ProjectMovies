import React from "react";
import "./Footer.css";
import { useSelector } from "react-redux";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { ImTelegram } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  const darkToggle = useSelector((state) => state.theme);

  return (
    <footer className={darkToggle.darkTheme ? "footer-dark" : "footer"}>
      <ul className="icons-list">
        <a href="https://www.facebook.com/profile.php?id=100001236386517">
          <BsFacebook
            className={
              darkToggle.darkTheme ? "icon-footer-dark" : "icon-footer"
            }
          />
        </a>
        <a href="https://wa.me/0527714077">
          <IoLogoWhatsapp
            className={
              darkToggle.darkTheme ? "icon-footer-dark" : "icon-footer"
            }
          />
        </a>
        <a href="https://twitter.com/snir_agi">
          <AiFillTwitterCircle
            className={
              darkToggle.darkTheme ? "icon-footer-dark" : "icon-footer"
            }
          />
        </a>
        <a href="https://github.com/Snir1812">
          <FaGithub
            className={
              darkToggle.darkTheme ? "icon-footer-dark" : "icon-footer"
            }
          />
        </a>
        <a href="https://www.linkedin.com/in/snir-agi-222bb2233/">
          <GrLinkedin
            className={
              darkToggle.darkTheme ? "icon-footer-dark" : "icon-footer"
            }
          />
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
