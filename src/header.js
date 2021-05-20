import React, { Component } from "react";
import Typical from "react-typical";
import "./App.css";
import FadeInWhenVisible from "./FadeInWhenVisible";
import logo from "./images/logo.png";
export default function Header() {
  {
    return (
      <FadeInWhenVisible>
      <div className="header">
        <div className="header">
        <Typical
          steps={["Hey", 1000, "I'm Salim Ghanem", 500]}
          loop={onloadstart}
          wrapper="p"
          
          />
        <h2>JUNIOR FRONT-END DEVELOPER</h2>
        </div>
        <div className="header-logo">
        <img  src={logo} alt="Salim Ghanem"></img></div>
        
      </div>
          </FadeInWhenVisible>
    );
  }
}
