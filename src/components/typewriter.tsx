"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const Typewriter = ({ text, className }: { text: string; className?: string }) => {
  const textArray = Array.from(text);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        await controls.start("visible");
        // Wait for 3 seconds after the text is visible
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await controls.start("hidden");
        // Wait for 1 second before starting again
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    };
    sequence();
  }, [controls]);


  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {textArray.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
