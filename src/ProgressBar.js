import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";

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

const Progress = styled(BaseBox)`
  background: #489db7;
  textsize: "16px";

  width: ${({ percent }) => percent}%;
`;

export default function ProgressBar({ percent, lang }) {
  const percentage = 66;
  
  // useEffect(() => {

  //   setPercent(percentage);
  // });
  // setPercent(value);
  // setTimeout(() => setPercent(60), 1000);
  // setTimeout(() => setPercent(70), 3000);
  // setTimeout(() => setPercent(80), 6000);
  // setTimeout(() => setPercent(90), 9000);
  // setTimeout(() => setPercent(100), 10000);

  return (
    
      <div className="progress">
        <Container>
          <div className="prog-title">{lang} <b>{`${percent}% `}</b> </div>
          
          <Background />

          <Progress percent={percent} text={`${percent}%`} />
        </Container>
      </div>
    
    
  );
}
