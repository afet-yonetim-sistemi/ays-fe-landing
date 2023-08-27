import React, { useState } from "react";

import "../Styles.css";
import {
  FaGithub,
  FaDiscord,
  FaLanguage,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
function MainPage() {
  const [click, isClicked] = useState(false);
  const languageClick = () => {
    isClicked(!click);
  };
  return (
    <>
      <header className="header-container">
        <div className="contact-section">
          <div className="header-container-contact-info">
            <ul>
              {" "}
              <li className="logo--github ">
                <FaGithub size="32px" color="white" />
              </li>
              <li className="logo--discord ">
                <FaDiscord size="32px" color="white" />
              </li>
            </ul>
            <div className="list-item" color="white"></div>
            <ul>
              <li>
                <FaLanguage size="32px" color="rgb(153 185 57)" />
              </li>
              <li className="contact-lang-text">Türkçe</li>
              <li>
                {" "}
                {click ? (
                  <FaAngleUp
                    size="16px"
                    color="white"
                    onClick={languageClick}
                  />
                ) : (
                  <FaAngleDown
                    size="16px"
                    color="white"
                    onClick={languageClick}
                  />
                )}
              </li>

              {click && (
                <ul className="select-buttons">
                  <li>English</li>
                  <li>German</li>
                  <li>Spanish</li>
                  <li>Chinese</li>
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
          <h1 className="intro-section-header">Biz Kimiz Ne Yapıyoruz ?</h1>
          <div className="intro-section-paragraph">
            <p>
              Afet Yönetim Sistemi,{" "}
              <i className="intro-section-link">acikkaynak/afet-org#35</i>{" "}
              alanındaki fikri gönüllü olarak hayata geçirmek için katkı
              sağlayan bir topluluktur.
            </p>
            <p>
              Gönüllü olarak kişilerin afet bölgesine kişi ve/veya alet edevat
              taşımasındaki süreci bir kuruma bağlı gerçekleştirmesi ve bu
              süreçte kişilerin güvenliğinin sağlanması, kurumun
              koordinasyonunun sağlanması, doğru envanterin doğru konuma
              gönderilmesini hedefliyoruz.
            </p>
            <p>
              Detaylı bilgi için <i className="intro-section-link">Discord</i>{" "}
              kanalımıza dahil olabilir, ilgili repositoryleri inceleyebilir,
              gönüllü kişilerle iletişime geçerek bize destek olabilirsin.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default MainPage;
