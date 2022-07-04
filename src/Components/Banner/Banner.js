import React from "react";
import "./Banner.scss";
import CountUp from "react-countup";
import { FaUserGraduate, FaGraduationCap } from "react-icons/fa";
import { GrSchedule } from "react-icons/gr";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Banner = () => {
  const banner_data = [
    {
      id: 1,
      className: "success stories",
      icon: <FaUserGraduate />,
      count: 1700,
    },
    {
      id: 2,
      className: "trusted tutors",
      icon: <FaGraduationCap />,
      count: 2000,
    },
    {
      id: 3,
      className: "schedules",
      icon: <GrSchedule />,
      count: 3000,
    },
    {
      id: 4,
      className: "courses",
      icon: <BsJournalBookmarkFill />,
      count: 788,
    },
  ];
  return (
    <div className="banner">
      {banner_data.map(({ id, className, icon, count }) => (
        <motion.div
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          key={id}
          className={`${className} count`}
        >
          {icon}
          <div className="count_wrapper">
            <CountUp
              className="countup"
              start={0}
              end={count}
              duration={2}
              enableScrollSpy
            />
            <p>{className}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Banner;
