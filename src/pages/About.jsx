import React from "react";
import "../components/GeneralPageCss.css";
import "../components/About.css";
import { FaHome } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import { BsBookHalf } from "react-icons/bs";
import { ImStarHalf } from "react-icons/im";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { useSelector } from "react-redux";

const About = () => {
  const darkToggle = useSelector((state) => state.theme);

  return (
    <div className="container general-page">
      <div className={darkToggle.darkTheme ? "cv-div-dark" : "cv-div"}>
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
              <IoIosMail className=" fs-5" /> sniragi123@gmail.com
            </p>
            <p>
              <BsTelephoneFill /> +972527714077
            </p>
            <p>
              <MdLanguage className=" fs-5" /> Hebrew , English
            </p>
            <div className="icon-div">
              <a href="https://www.facebook.com/profile.php?id=100001236386517">
                <BsFacebook
                  className={
                    darkToggle.darkTheme ? "icon-info-dark" : "icon-info"
                  }
                />
              </a>
              <a href="https://wa.me/0527714077">
                <IoLogoWhatsapp
                  className={
                    darkToggle.darkTheme ? "icon-info-dark" : "icon-info"
                  }
                />
              </a>
              <a href="https://twitter.com/snir_agi">
                <AiFillTwitterCircle
                  className={
                    darkToggle.darkTheme ? "icon-info-dark" : "icon-info"
                  }
                />
              </a>
              <a href="https://github.com/Snir1812">
                <FaGithub
                  className={
                    darkToggle.darkTheme ? "icon-info-dark" : "icon-info"
                  }
                />
              </a>
              <a href="https://www.linkedin.com/in/snir-agi-222bb2233/">
                <GrLinkedin
                  className={
                    darkToggle.darkTheme ? "icon-info-dark" : "icon-info"
                  }
                />
              </a>
            </div>
          </div>
        </div>
        <div className="cv-right">
          <div className="right-up">
            <div>
              <p>About Me</p>
              <p className=" fs-6">
                Hi, I'm Snir, in high school I studied economics and business
                administration, I'm currently a soldier in the Israel Defense
                Forces and trying to enter the high-tech fields.
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
                <p className="in-skill w-50">50%</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
