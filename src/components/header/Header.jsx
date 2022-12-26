import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/wildcrux.PNG";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Portfolio</h5>
        <h1>WildCrux</h1>
        <h5 className="text-light">
          Get in touch for professional web Development services.
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
