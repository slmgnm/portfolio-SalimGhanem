import React, { Component } from "react";

import "./App.css";
import CV from "./files/CV.pdf";

export default function About() {
  {
    return (
      <div className="about">
        <div classname="about-text">
          <p className="text">
            Junior Web developer able to build a Web presence from the ground
            up. Proficient in hand-coding HTML, CSS, JavaScript, moderate
            knowledge in Reactjs and Node.js mobie compliant websites with an
            emphasis on Search Engine Optimization(SEO) best practices.
          </p>
          <button className="btn">
            <a href={CV} target="_blank">
              Downloade my Resume
            </a>
          </button>
        </div>
      </div>
    );
  }
}
