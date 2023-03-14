import { motion, useScroll, useTransform } from "framer-motion";
import * as React from "react";

export default function Scroll() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 1], [0.2, 2]);

  return (
    <div className="wrapper">
      <motion.div
        className="container"
        style={{
          scale,
        }}
      >
        <motion.div
          className="item"
          style={{
            scaleY: scrollY,
          }}
        />{" "}
      </motion.div>
    </div>
  );
}
