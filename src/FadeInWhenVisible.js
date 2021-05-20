import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
export default function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 2, when: "beforeChildren" }}
      variants={{
        hidden: { opacity: 0, scale: 1, transition: { duration: 0.5 },},
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            delay: 0.3, 
            staggerChildren:3 
          },
        },
      }}>
      {children}
    </motion.div>
  );
}
