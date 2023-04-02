import React from "react";
import Typical from "react-typical";
import "./App.css";
import FadeInWhenVisible from "./FadeInWhenVisible";
import logo from "./images/logo.png";

export default function Header() {
  return (
    <FadeInWhenVisible>
      <div className='header'>
        <div className='header-text'>
          <h2 className='span'>Hey,</h2>
          <Typical
            steps={[1000, "I'm Salim Ghanem", 500]}
            // loop={}
            wrapper='p'
          />
          <h2 className='subtitle'>Fullstack DEVELOPER</h2>
        </div>
        <div className='header-logo'>
          <img src={logo} alt='Salim Ghanem' />
        </div>
      </div>
    </FadeInWhenVisible>
  );
}
