import React, { useState, useEffect, useRef } from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { motion } from "framer-motion";
const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);

  return (
    <FadeInWhenVisible>
      <div
        className={`card ${flip ? "flip" : ""}`}
        onMouseEnter={() => setFlip(!flip)}
        onMouseLeave={() => setFlip(!flip)}
      >
        <div className='front'>
          <img src={flashcard.imgUrl} alt='sdfsdfsdf' />
          <div>
            <h3>{flashcard.title}</h3>{" "}
          </div>
        </div>
        <div className='back'>
          {flashcard.description}
          <div className='flashcard-options'>
            <motion.button
              className='button'
              type='button'
              value='Preview'
              whileHover={{
                scale: 1.05,
                color: "snow",
                backgroundColor: "#2d2e30",
              }}
              transition={{
                duration: 0.4,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <a href={flashcard.options} target='_blank'>
                Preview
              </a>
            </motion.button>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

export default Flashcard;
