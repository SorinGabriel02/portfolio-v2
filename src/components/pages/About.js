import React from "react";

import {
  aboutPage,
  describeMe,
  skills,
  contacts,
  email,
  linked,
  tweet,
  git,
} from "./About.module.scss";
import linkedIn from "../../assets/linkedIn.png";
import emailLogo from "../../assets/email.png";
import twitter from "../../assets/twitter.png";
import github from "../../assets/github.png";

const About = () => {
  return (
    <main className={aboutPage}>
      <h1>About This Guy</h1>
      <p className={describeMe}>
        Last year in July I felt to start learning programming &#40;an old
        passion of mine from high school&#41; and I noticed that it's enjoyable.
        As I started to learn web development, using online resources like
        Codecademy, FreeCodeCamp, Udemy and Scrimba I noticed that I like
        learning how things work, figuring stuff out and solving problems.
      </p>
      <p className={describeMe}>
        Besides coding I also enjoy meditation because it helps me clear and
        rest my mind and coffee because well... it's tasty. &#128522;
      </p>
      <section className={skills}>
        <h3>These Are Some Of My Skills...</h3>
        <ul>
          <li>
            <p>&#9830; ReactJS</p>
          </li>
          <li>
            <p>&#9830; NodeJS</p>
          </li>
          <li>
            <p>&#9830; ExpressJS</p>
          </li>
          <li>
            <p>&#9830; MongoDB</p>
          </li>
          <li>
            <p>&#9830; HTML5</p>
          </li>
          <li>
            <p>&#9830; CSS3</p>
          </li>
          <li>
            <p>&#9830; JavaScript</p>
          </li>
          <li>
            <p>&#9830; Git/Github</p>
          </li>
          <li>
            <p>&#9830; npm</p>
          </li>
          <li>
            <p>&#9830; MySQL</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>Let's Get in Touch</h3>

        <div className={contacts}>
          <a
            className={email}
            href="mailto:gabi.portfolio02@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={emailLogo} alt="email logo" />{" "}
          </a>
          <a
            className={linked}
            href="https://www.linkedin.com/in/sg-lupu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedIn} alt="linkedIn logo" />
          </a>
        </div>
        <div className={contacts}>
          <a
            className={tweet}
            href="https://twitter.com/SgLupu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter logo" />
          </a>

          <a
            className={git}
            href="https://github.com/SorinGabriel02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github logo" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
