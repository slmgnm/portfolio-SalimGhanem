import React from "react";
import styled from "styled-components";
import {
  background,
  border,
  bottom,
  boxShadow,
  color,
  compose,
  layout,
  left,
  position,
  right,
  space,
  top,
  typography,
} from 'styled-system';
import { motion } from "framer-motion";
const composedHelpers = compose(
  background,
  layout,
  border,
  space,
  color,
  typography,
  top,
  bottom,
  left,
  right,
  position,
  boxShadow,
);
const Box = styled.div`
  ${composedHelpers}
`;
const Bar = styled(Box)`
  overflow: hidden;
`;

Bar.defaultProps = {
  position: "relative",
  borderRadius: 0.0,
};
const MotionBox = styled(motion.div)`
  ${composedHelpers}
`;
 
const BarFilling = styled(MotionBox)``;

BarFilling.defaultProps = {
  position: "absolute",
  
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
};


  const ProgBar = ({
  percents,
  duration = 1,
  delay = 0.5,
  easing = "easeInOut", // [number, number, number, number] | "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | EasingFunction;
  barWidth = 550,
  barHeight = 24,
  progressColor = "red",
  baseColor = "gray",
}) => {
  const percentsOffset = (percents - 100) * (barWidth / 100);

  const transition = {
    duration: duration,
    delay: delay,
    ease: easing,
  };

  const variants = {
    enter: {
      // opacity: 0,
      x: -barWidth,
    },
    animate: {
      // opacity: 1,
      x: [-barWidth, percentsOffset],
      transition,
    },
  };

  return (
    <Bar width={barWidth} height={barHeight} bg={baseColor}>
      <BarFilling
        variants={variants}
        initial="enter"
        animate="animate"
        exit="enter"
        bg={progressColor}
      />
    </Bar>
  );
};
export default ProgBar;
