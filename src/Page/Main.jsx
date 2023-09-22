import React, { useEffect, useState } from "react";
import paragraph from "../helper/language";
import "../Styles.css";
import {
  FaGithub,
  FaDiscord,
  FaLanguage,
  FaAngleUp,
  FaAngleDown,
} from "react-icons/fa";

function MainPage() {
  const [language, setLanguage] = useState({ name: "Türkçe", code: "tr" });
  const [isShow, setIsShow] = useState(false);

  const [languageList] = useState([
    { name: "English", code: "en" },
    { name: "Türkçe", code: "tr" },
  ]);

  const languageHandler = (e) => {
    setLanguage(e);
  };

  return (
    <>
      <header className="header-container">
        <div className="contact-section">
          <div className="header-container-contact-info">
            <ul>
              {" "}
              <li className="logo--github ">
                <a href="https://github.com/afet-yonetim-sistemi">
                  <FaGithub size="32px" color="white" />
                </a>
              </li>
              <li className="logo--discord ">
                <a href="https://discord.gg/QADkUTBKGF">
                  <FaDiscord size="32px" color="white" />
                </a>
              </li>
            </ul>
            <div className="list-item" color="white"></div>
            <ul className="select-wrapper" onClick={() => setIsShow(!isShow)}>
              <li>
                <FaLanguage size="32px" color="rgb(153 185 57)" />
              </li>
              <li>{language.name}</li>
              {isShow ? <FaAngleUp /> : <FaAngleDown />}
              {isShow && (
                <ul className="select-container">
                  {languageList.map((item) =>
                    item.code === language.code ? null : (
                      <li
                        className="select-options"
                        onClick={() => languageHandler(item)}
                        key={item.code}
                      >
                        {item.name}
                      </li>
                    )
                  )}
                </ul>
              )}
            </ul>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="356"
              height="8"
              viewBox="0 0 356 8"
              fill="none"
            >
              <path
                d="M0.113273 5.01189L3.01183 7.88679L5.88673 4.98823L2.98817 2.11333L0.113273 5.01189ZM355.884 3.55382L352.985 0.67892L350.11 3.57748L353.009 6.45237L355.884 3.55382ZM3.00205 5.50006L352.999 4.06564L352.995 3.06565L2.99795 4.50007L3.00205 5.50006Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="header-container--logo">
          <img src="/logo3.jpg" alt="resim" />
        </div>
      </header>
      <section className="intro-section">
        <div>
          <h1 className="intro-section-header title">
            {
              paragraph.find((item) => item.language.code === language.code)
                .header
            }
          </h1>
          <div
            className="intro-section-paragraph"
            dangerouslySetInnerHTML={
              paragraph.find((item) => item.language.code === language.code)
                .paragraph
            }
          ></div>
        </div>
      </section>
      <section className="info-section">
        <div className="bg-svg"></div>
        <div className="title-container ">
          <h1 className="info-section-header title">
            {
              paragraph.find((item) => item.language.code === language.code)
                .header2
            }
          </h1>
          <div className="tech-container">
            <ul className="info-tech">
              <li>Back-End:</li>
              <li>Front-End:</li>
              <li>Mobile:</li>
              <li>DevOps:</li>
              <li>UI/UX Design:</li>
              <li>Product:</li>
              <li>Test:</li>
              <li>Moderating:</li>
            </ul>
            <div className="tech-line">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="256"
                viewBox="0 0 7 256"
                fill="none"
              >
                <path
                  d="M3.64441 0.333333C2.17165 0.333412 0.977742 1.52738 0.977742 3.00014C0.977742 4.4729 2.17165 5.66675 3.64441 5.66667C5.11717 5.66659 6.31108 4.47262 6.31108 2.99986C6.31108 1.5271 5.11717 0.333255 3.64441 0.333333ZM3.64441 250.333C2.17165 250.333 0.977742 251.527 0.977742 253C0.977742 254.473 2.17165 255.667 3.64441 255.667C5.11717 255.667 6.31108 254.473 6.31108 253C6.31108 251.527 5.11717 250.333 3.64441 250.333ZM3.14441 3.00003L3.14441 253L4.14441 253L4.14441 2.99997L3.14441 3.00003Z"
                  fill="#1C2A3F"
                />
              </svg>
            </div>
            <div className="tech-content">
              <ul className="info-content">
                <li>Java17, Spring Boot 3, Docker, MySQL</li>
                <li>React.js, TypeScript</li>
                <li>React Native</li>
                <li>Amazon Web Services, Terminal Skills</li>
                <li>Figma</li>
                <li>Github Project</li>
                <li>API & UI Test Automation, Manuel Testing</li>
                <li>Orientation, Organization Bots</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tech-image">
          <img src="techimage.png" alt="cute" />
        </div>
      </section>

      <div className="footer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="12"
          viewBox="0 0 1300 12"
          fill="none"
        >
          <path
            d="M10 5L0 0.226497L0 11.7735L10 7V5ZM1290 7L1300 11.7735V0.226497L1290 5V7ZM9 7H1291V5H9V7Z"
            fill="white"
          />
        </svg>
        <div className="footer-area">
          <div className="footer-title">
            <p className="footer-title-paragraph">
              Afet Yönetim Sistemi | Copyright © 2023
            </p>
          </div>
          <div className="footer-icon">
            <a href="https://github.com/afet-yonetim-sistemi">
              <FaGithub size="32px" color="white" />
            </a>
            <a href="https://discord.gg/QADkUTBKGF">
              <FaDiscord size="32px" color="white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
