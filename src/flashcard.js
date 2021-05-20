import React, { useState, useEffect, useRef } from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";
const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);
 
  return (
    <FadeInWhenVisible>
    <div
      className={`card ${flip ? "flip" : ""}`}
      onMouseEnter={() => setFlip(!flip)}
      onMouseLeave={() => setFlip(!flip)}>
      <div className="front">
        <img src={flashcard.imgUrl} alt="sdfsdfsdf" />
        <div>
          <h3>{flashcard.title}</h3>{" "}
        </div>
      </div>
      <div className="back">
        {flashcard.description}
        <div className="flashcard-options">
          <button className="button" type="button" value="Preview">
            <a href={flashcard.options} target="_blank">
              Preview
            </a>
            
          </button>
        </div>
      </div>
    </div>
    </FadeInWhenVisible>
  );
};

export default Flashcard;

