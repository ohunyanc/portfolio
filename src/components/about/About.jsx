import React from "react";
import "./about.css";
import ME from "../../assets/mee-about.jpg";
import { TbMilitaryAward } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { SiTestinglibrary } from "react-icons/si";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbMilitaryAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>3+ Clients globally</small>
            </article>

            <article className="about__card">
              <SiTestinglibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4+ projects completed</small>
            </article>
          </div>

          <p>
            Web Developer from Lagos, Nigeria with a keen eye for design,
            functionality and maintenance. goal oriented and result driven with
            an approach to continous learning, application and standard
            operational measures.
          </p>
          <p>
            Interested in up-to-date techological practices by industry
            standards, to work well independently as well as in a team. I
            believe in the power of collaborative exploits on and off
            professional endeavours.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
