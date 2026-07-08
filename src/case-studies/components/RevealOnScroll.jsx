import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function RevealOnScroll({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
}) {
  const prefersReduced = useReducedMotion();

  const directionMap = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: -40 },
    right: { x: 40 },
  };

  const offset = prefersReduced ? {} : directionMap[direction] || directionMap.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-40px" }}
      transition={{
        duration: prefersReduced ? 0.3 : 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
