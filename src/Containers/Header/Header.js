import React from "react";
import { Navbar } from "../../Components";
import "./Header.scss";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <Navbar />
      <header>
        <div className="header-info">
          <p className="sub-heading">welcome to learning-bd</p>
          <h1 className="heading">Best Online Education Expertise</h1>
          <p className="para">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p className="course-btn">
            <a className="btn btn-pest" href="/">
              get started now
              <span>
                <BsArrowRight />
              </span>
            </a>
            <a className="btn btn-white" href="/">
              view course
              <span>
                <BsArrowRight />
              </span>
            </a>
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
