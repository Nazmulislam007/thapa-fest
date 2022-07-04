import React from "react";
import "./Services.scss";
import MotionWrapper from "../../wrapper/MotionWrapper";
import img from "../../assets";

const Services = () => {
  const info = [
    { id: 1, img: img.art, title: "Art & Design" },
    { id: 2, img: img.bus, title: "Business Administration" },
    { id: 3, img: img.com, title: "Computer Science" },
    { id: 4, img: img.design, title: "UI/UX Design Courses" },
    { id: 5, img: img.gra, title: "Graphic Design" },
    { id: 6, img: img.hea, title: "Health & Fitness" },
    { id: 7, img: img.his, title: "History & Archeologic" },
    { id: 8, img: img.info, title: "Information Software" },
    { id: 9, img: img.mar, title: "Marketing" },
    { id: 10, img: img.miu, title: "Music" },
    { id: 11, img: img.soft, title: "Software Engineering" },
    { id: 12, img: img.web, title: "Web Management" },
  ];
  return (
    <div id="course">
      <p className="title">Courses</p>
      <h1 className="heading">Browse Our Online Courses</h1>
      <a href="/" className="course__container">
        {info.map(({ id, img, title }) => (
          <div key={id} className="box">
            <img src={img} alt={title} />
            <p className="box__heading">{title}</p>
            <p className="box__count">25 Courses</p>
          </div>
        ))}
      </a>
    </div>
  );
};

export default MotionWrapper(Services, "services");
