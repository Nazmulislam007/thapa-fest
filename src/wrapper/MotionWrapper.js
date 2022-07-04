import React from "react";
import { motion } from "framer-motion";

const MotionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`container`}
        id={`${idName}`}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrapper;
