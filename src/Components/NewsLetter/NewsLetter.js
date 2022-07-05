import React from "react";
import { motion } from "framer-motion";
import "./NewsLetter.scss";
import { IoIosSend } from "react-icons/io";

const NewsLetter = () => {
  return (
    <div id="contact" className="newsletter">
      <motion.div
        className="container"
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
      >
        <div className="content">
          <h1 className="card-heading">
            Newsletter - Stay tune and get the latest update
          </h1>
          <p className="card-para">Far far away, behind the word mountains</p>
        </div>
        <div className="form-control">
          <input type="text" placeholder="Input Email Address" />
          <IoIosSend />
        </div>
      </motion.div>
    </div>
  );
};

export default NewsLetter;
