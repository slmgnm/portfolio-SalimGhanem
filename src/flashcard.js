import React, { useState, useEffect, useRef } from "react";

const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);
  // const [height, setHeight] = useState("initial");
  // const frontEl = useRef();
  // const backEl = useRef();
  // const maxHieght = () => {
  //   const frontHieght = frontEl.current.getBoundingClientRect().height;
  //   const backHieght = backEl.current.getBoundingClientRect().height;
  //   setHeight(() => Math.max(frontHieght, backHieght, 100));
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", maxHieght);
  //   return () => window.removeEventListener("resize", maxHieght);
  // }, []);
  return (
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
            {/* {flashcard.option}Preview */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;

{
  /* <button className="btn">
            <a href={CV} target="_blank">
              Downloade my Resume
            </a>
          </button> */
}
