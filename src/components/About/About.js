import React from "react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="About">
        <p>
          Gratitude is like most desirable traits and qualities in that it is
          usually not enough to simply decide to be grateful — we must actively
          practice it to cement its place in our lives.
          <br />
          <br />
          <span>A Little Gratitude...</span> is designed to help you reflect on
          your life and identify what you are grateful for, and what changes you
          can make for a better tomorrow.
        </p>
      </div>
      <div id="contact">
        <p>
          Contact me at:
          <br />
          <a href="mailto:dahc.reverse@gmail.com?subject=YOU%20ROCK!">
            dahc.reverse@gmail.com
          </a>
        </p>
        <a
          href="https://github.com/losmanzanos"
          target="_blank"
          rel="noreferrer"
        >
          <img id="icon" src={github} alt="github" />
        </a>

        <a
          href="https://www.linkedin.com/in/chad-moravec/"
          target="_blank"
          rel="noreferrer"
        >
          <img id="icon" src={linkedin} alt="linkedin" />
        </a>
      </div>
    </>
  );
};

export default About;
