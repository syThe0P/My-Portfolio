import React from "react";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Pranav Kumar
        <svg
          width="36"
          height="36"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="home__hand"
        >
        </svg>
      </h1>
      <h3 className="home__subtitle">Web Developer</h3>
      <p className="home__description">
        I'm a creative Web Developer based in Delhi, and I'm very passionate and
        dedicated to any work.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
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
  );
};

export default Data;
