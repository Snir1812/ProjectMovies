import React from "react";
import "../components/GeneralPageCss.css";
import "../components/About.css";
// import img from "../../public/logo192.png";
import { FaHome } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { BsBookHalf } from "react-icons/bs";
import { ImStarHalf } from "react-icons/im";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { ImTelegram } from "react-icons/im";
import { useSelector } from "react-redux";

const About = () => {
  // const darkToggle = useSelector((state) => state.theme);

  return (
    <div className="container general-page">
      <div className="cv-div">
        <div className="cv-left">
          <div className="cv-imgDiv">
            <p>Snir Agi</p>
          </div>
          <div className="cv-info">
            <p>
              <BsBookHalf /> Full stack Developer
            </p>
            <p>
              <AiTwotoneCalendar /> 20
            </p>
            <p>
              <FaHome /> Petah Tikva , Israel
            </p>
            <p>
              <IoIosMail /> sniragi123@gmail.com
            </p>
            <p>
              <BsTelephoneFill /> +972527714077
            </p>
            <p>
              <GrLanguage /> Hebrew , English
            </p>
            <div className=" d-flex align-items-center justify-content-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=100001236386517">
                <BsFacebook className="icon-info" />
              </a>
              <a href="https://wa.me/0527714077">
                <IoLogoWhatsapp className="icon-info" />
              </a>
              <a href="https://twitter.com/snir_agi">
                <AiFillTwitterCircle className="icon-info" />
              </a>
              <a href="https://www.instagram.com/snir_agi/">
                <AiFillInstagram className="icon-info" />
              </a>
              <a href="">
                <ImTelegram className="icon-info" />
              </a>
            </div>
          </div>
        </div>
        <div className="cv-right">
          <div className="right-up">
            <div>
              <p>About Me</p>
              <p className=" fs-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus praesentium ullam porro quasi? Asperiores rerum
                veritatis libero aspernatur, id quis veniam ut mollitia culpa
                laudantium reprehenderit placeat harum eos pariatur!
              </p>
            </div>
            <div>
              <p>Work</p>
              <p className=" fs-6">A soldier in the Israel Defense Forces</p>
            </div>
            <div>
              <p>Education</p>
              <p className=" fs-6">HackerU - Full Stack Development Course</p>
            </div>
          </div>
          <div className="right-down">
            <p className=" fs-4 d-flex align-items-center gap-2">
              <ImStarHalf />
              skills
            </p>
            <div>
              <h6>Html</h6>
              <p className="skill">
                <p className="in-skill">Done</p>
              </p>
            </div>
            <div>
              <h6>Css</h6>
              <p className="skill">
                <p className="in-skill">Done</p>
              </p>
            </div>
            <div>
              <h6>JavaScript</h6>
              <p className="skill">
                <p className="in-skill">Done</p>
              </p>
            </div>
            <div>
              <h6>React</h6>
              <p className="skill">
                <p className="in-skill">Done</p>
              </p>
            </div>
            <div>
              <h6>C#</h6>
              <p className="skill">
                <p className="in-skill w-25">25%</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
