import React from "react";
import { BiLoaderCircle } from "react-icons/bi";
import "./Loader.scss";
const Loader = () => {
  return (
    <div className="loader">
      <BiLoaderCircle />
    </div>
  );
};

export default Loader;
