import React from "react";
import "./Explore.scss";
import MotionWrapper from "../../wrapper/MotionWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
import img from "../../assets";
import "swiper/scss";
import { Autoplay } from "swiper";

const Explore = () => {
  const info = [
    {
      id: 1,
      heading: "Enhancing Adobe Photoshop CC 2020 Skills",
      img: img.gra,
      userImg: img.user,
      user: "John Smith",
      rating: 5.0,
      lecture: "50",
      totalHour: 190,
    },
    {
      id: 2,
      heading: "Basic Fundamentals for Software Engineering",
      img: img.com,
      userImg: img.user,
      user: "John Smith",
      rating: 5.0,
      lecture: "50",
      totalHour: 190,
    },
    {
      id: 3,
      heading: "HTML, CSS, and Javascript for Web Developers",
      img: img.web,
      userImg: img.user,
      user: "John Smith",
      rating: 5.0,
      lecture: "50",
      totalHour: 190,
    },
    {
      id: 4,
      heading: "Basic Fundamentals for Software Engineering",
      img: img.com,
      userImg: img.user,
      user: "John Smith",
      rating: 5.0,
      lecture: "50",
      totalHour: 190,
    },
    {
      id: 5,
      heading: "Introducing to Programming with WordPress",
      img: img.web,
      userImg: img.user,
      user: "John Smith",
      rating: 5.0,
      lecture: "50",
      totalHour: 190,
    },
  ];
  return (
    <div id="explore">
      <p className="title">Our Courses</p>
      <h1 className="heading">Explore Our Popular Online Courses</h1>
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          1200: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        loop
        slidesPerView={1}
        spaceBetween={20}
        className="wrapper mySwiper"
        modules={[Autoplay]}
      >
        {info.map(
          ({ id, heading, img, userImg, user, rating, lecture, totalHour }) => (
            <SwiperSlide key={id} className="swiper-slide">
              <div className="slide-header">
                <img src={img} alt={heading} />
                <div className="slide-heading">
                  <h1 className="card-heading">{heading}</h1>
                  <div className="rating">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <p>({rating})</p>
                  </div>
                  <div className="user">
                    <img src={userImg} alt="user" />
                    <span>by {user}</span>
                  </div>
                  <p className="lecture-desc">
                    {lecture} lectures ({totalHour} hrs)
                  </p>
                </div>
              </div>
              <div className="price">
                <p>$100 All Course / $15 per month</p>
              </div>
              <a href="/" className="btn btn-enroll">
                Enroll now!
              </a>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default MotionWrapper(Explore, "explore");
