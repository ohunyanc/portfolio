import React from "react";
import "./services.css";
import { BsBookmarkCheckFill } from "react-icons/bs";

export const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>Continous Integration/Continous Deployment</p>
            </li>
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>SEO for better search rankings.</p>
            </li>
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>website Business Models and Transactional Scaling</p>
            </li>
          </ul>
        </article>
        {/* end of web dev*/}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>Content Development for Blogs</p>
            </li>
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>Content management with Socail media.</p>
            </li>
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>Attention to progresive insight with Analytics.</p>
            </li>
          </ul>
        </article>
        {/*end of content creation*/}

        <article className="service">
          <div className="service__head">
            <h3>Cloud Computing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>Penetration testing, finding vulnerabilties.</p>
            </li>
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>Deploying Applications and security on the Cloud.</p>
            </li>
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>Employment of Virtual machines for Safety and testing</p>
            </li>
          </ul>
        </article>
        {/*end of cloud computing*/}
      </div>
    </section>
  );
};

export default Services;
