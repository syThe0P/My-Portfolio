import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Pranav</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/ig_pranav07/"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/pranav-kumar-078a61239/"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>
          <a
            href="https://github.com/syThe0P"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Pranav Kumar. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
