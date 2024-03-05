import React from "react";
import "./about.css";
import profile from "../../assets/profile.jpg";
import CV from "../../assets/Pranav-Cv.pdf"
import Info from "./Info";
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={profile} alt="" className="about__img" />
        <div className="about__data">
          <Info />

          <p className="about__description">
            Frontend developer, I create web pages with UI / UX user interface,
            I have just started this experience and carried out some projects.
          </p>
          <a download="" href={CV} className="button button--flex">
            Download CV
            <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
              </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
