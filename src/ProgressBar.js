import React, { useState, useEffect } from "react";
import "./App.css";
import { motion } from "framer-motion";
import styled from "styled-components";
import FadeInWhenVisible from "./FadeInWhenVisible";
const Container = styled.div`
  background-color: white;
  height: 14px;
  width: 100%;
  position: relative;
  display: grid;
  align-items: center;
`;

const BaseBox = styled.div`
  display: flex;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 1px;
  transition: width 10s ease-in-out;
`;

const Background = styled(BaseBox)`
  background: #e5e5e5;
  width: 100%;
`;

const Progress = styled(motion.div)`
  background: #489db7;
  textsize: "16px";
  display: flex;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 1px;

  width: ${({ percent }) => percent}%;
`;

export default function ProgressBar({ percent, lang }) {
  const percentage = 66;

  return (
    <FadeInWhenVisible>
      <div className="progress">
        <Container>
          <div className="prog-title">
            {lang} <b>{`${percent}% `}</b>{" "}
          </div>

          <Background />

          <Progress
            transition={{ duration: 2, type: "spring", delay: 1 }}
            // animate={controls}

            initial={{ width: "0%" }}
            animate={{ width: `${percent}%` }}
            percent={percent}
            text={`${percent}%`}
          />
        </Container>
      </div>
    </FadeInWhenVisible>
  );
}
