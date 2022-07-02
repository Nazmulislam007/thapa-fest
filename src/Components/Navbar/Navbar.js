import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <a className="navbar-brand" href="/">
        Learning-BD
        <small>Online Education & Learing</small>
      </a>
      <ul className={`navbar-nav ${toggle ? "active" : ""}`}>
        {["Home", "About", "Course", "FAQ", "Contact"].map((item) => (
          <li key={item} onClick={() => setToggle(false)} className="nav-item">
            <a className="nav-link" href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <div className={`hamburger-menu ${toggle ? "active" : ""}`}>
          <HiOutlineMenuAlt2 onClick={() => setToggle(true)} />
        </div>
        <div className={`hamburger-close ${toggle ? "active" : ""}`}>
          <AiOutlineCloseCircle onClick={() => setToggle(false)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
