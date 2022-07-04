import React from "react";
import MotionWrapper from "../../wrapper/MotionWrapper";
import "./About.scss";
import about from "../../assets/teacher.svg";
import { motion } from "framer-motion";
import { GiBookmarklet } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { CgUserlane } from "react-icons/cg";

const About = () => {
  const desc = [
    {
      id: 1,
      icon: <GiBookmarklet />,
      heading: "Online Courses",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 2,
      icon: <GrCertificate />,
      heading: "Earn A Certificates",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 3,
      icon: <CgUserlane />,
      heading: "Learn with Expert",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];

  return (
    <>
      <div id="about">
        <motion.img
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          src={about}
          alt="teacher"
        />
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          className="about-desc"
        >
          <p className="title">learn anything</p>
          <h1 className="heading">Benefits About Online Learning Expertise</h1>
          {desc.map(({ id, icon, heading, para }) => (
            <div key={id} className="about-card">
              {icon}
              <div className="about-card-text">
                <p className="card-heading">{heading}</p>
                <p className="card-para">{para}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default MotionWrapper(About, "about");
