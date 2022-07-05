import React, { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navbar = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 650 ||
        document.documentElement.scrollTop > 650
      ) {
        navbar.current.classList.add("scroll-nav");
      } else {
        navbar.current.classList.remove("scroll-nav");
      }
      setToggle(false);
    });
  }, []);

  return (
    <nav ref={navbar}>
      <a className="navbar-brand" href="#home">
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
