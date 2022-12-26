import React from "react";
import "./experience.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

const experience = () => {
  return (
    <section id="experience">
      <h5>My skill-set</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>NextJS</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>HTML | CSS | Tailwind | SASS</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* End of Front*/}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>Microsoft Azure</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
