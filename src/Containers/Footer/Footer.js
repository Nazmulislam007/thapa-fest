import React from "react";
import "./Footer.scss";
import MotionWrapper from "../../wrapper/MotionWrapper";
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsArrowRight, BsTelephoneFill } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <div className="learn-bd">
        <a className="navbar-brand" href="#home">
          Learning-BD
          <small>Online Education & Learing</small>
        </a>
        <p className="card-para">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <div className="social">
          <a href="/">
            <AiOutlineTwitter />
          </a>
          <a href="/">
            <AiFillLinkedin />
          </a>
          <a href="/">
            <AiFillGithub />
          </a>
        </div>
      </div>
      <div className="explore">
        <h4 className="footer-heading">Explore</h4>
        <a className="footer-link" href="/">
          <span>
            <BsArrowRight />
          </span>
          About Us
        </a>
        <a className="footer-link" href="/">
          <span>
            <BsArrowRight />
          </span>
          Services
        </a>
        <a className="footer-link" href="/">
          <span>
            <BsArrowRight />
          </span>
          Courses
        </a>
        <a className="footer-link" href="/">
          <span>
            <BsArrowRight />
          </span>
          Contact Us
        </a>
      </div>
      <div className="quick-links">
        <h4 className="footer-heading">Quick Links</h4>
        <a className="footer-link" href="/">
          <span>
            <BsArrowRight />
          </span>
          Contact Us
        </a>
        <a className="footer-link" href="/">
          <span>
            <BsArrowRight />
          </span>
          Terms & Conditions
        </a>
        <a className="footer-link" href="/">
          <span>
            <BsArrowRight />
          </span>
          Privacy
        </a>
        <a className="footer-link" href="/">
          <span>
            <BsArrowRight />
          </span>
          Feedbacks
        </a>
      </div>
      <div className="contact">
        <h4 className="footer-heading">Have a Questions?</h4>
        <p>
          <span>
            <FaAddressCard />
          </span>
          MJ48+C3R, Kurigram-Ulipur-Chilmari Road, Ulipur, Kurigram, Rangpur, BD
        </p>
        <a href="tel:+8801734997789">
          <span>
            <BsTelephoneFill />
          </span>
          +880 1734 997789
        </a>
        <a href="mailto:nazmulislam.ni897@gmail.com">
          <span>
            <IoIosSend />
          </span>
          nazmulislam.ni897@gmail.com
        </a>
      </div>
    </div>
  );
};

export default MotionWrapper(Footer, "footer");
