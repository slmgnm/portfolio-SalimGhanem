import React, { Component } from "react";

import "./App.css";
import CV from "./files/CV.pdf";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

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

          <motion.button
            className="btn"
            whileHover={{
              scale: 1.05,
              color: "snow",
              backgroundColor: "#2d2e30",
            }}
            transition={{
              duration: 0.4,
            }}
            whileTap={{ scale: 0.97 }}>
            <a href={CV} target="_blank">
              My Resume &nbsp;  
               
              
              <FontAwesomeIcon
                icon={faDownload}
                
                
                size="x"
              />
            </a>
          </motion.button>
        </div>
      </div>
    );
  }
}
