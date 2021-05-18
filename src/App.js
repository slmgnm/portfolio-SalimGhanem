import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import FlashcardList from "./flashCardsList";
import ProgressBar from "./ProgressBar";
import Header from "./header";
import About from "./about";
import fJoy from "./images/fJoy.png";
import expU from "./images/expU.png";
import fresh from "./images/FreshAutoPesu.png";
import weather from "./images/weather.png";
import colors from "./images/colors.png";
import events from "./images/Events.png";
import SocialFlow from "./social";

import ProgBar from "./progBar";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  const [percent, setPercent] = useState(20);

  const [lang, setLang] = useState("");
  // const categoryEl = useRef();
  // const amountEl = useRef();
  return (
    <div className="container">
      <SocialFlow />
      <Header />
      <About />
      <div className="progress-grid">
      
        <ProgressBar percent={40} lang="React" text= {percent}/>
        <ProgressBar percent={10} lang="JavaScript" />
        <ProgressBar percent={60} lang="HTML" />
        <ProgressBar percent={50} lang="CSS" />
      
      </div>
      <FlashcardList flashcards={flashcards} />
      
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    title: "Online Shop",
    imgUrl: fJoy,
    description: "E-Commerce WordPress website built with Flatsome UX builder.",
    options: "https://fjoycouture.net/",
  },
  {
    id: 2,
    title: "project title",
    imgUrl: expU,
    description: "project description",
    options: ["link"],
  },
  {
    id: 3,
    title: "project title",
    imgUrl: fresh,
    description: "project description",
    options: ["link"],
  },
  {
    id: 4,
    title: "project title",
    imgUrl: weather,
    description: "project description",
    options: ["link"],
  },
  {
    id: 5,
    title: "project title",
    imgUrl: colors,
    description: "project description",
    options: ["link"],
  },
  {
    id: 6,
    title: "project title",
    imgUrl: events,
    description: "project description",
    options: ["link"],
  },
];

export default App;
