import React from "react";
import "./Testimonial.scss";
import MotionWrapper from "../../wrapper/MotionWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../assets";
import "swiper/scss";
import { Autoplay } from "swiper";

const Testimonial = () => {
  const info = [
    {
      id: 1,
      student: "ROGER SCOTT",
      course: "Computer Science",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      userImg: img.user1,
    },
    {
      id: 2,
      student: "ROGER SCOTT",
      course: "Computer Science",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      userImg: img.user2,
    },
    {
      id: 3,
      student: "ROGER SCOTT",
      course: "Computer Science",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      userImg: img.user1,
    },
    {
      id: 4,
      student: "ROGER SCOTT",
      course: "Computer Science",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      userImg: img.user2,
    },
    {
      id: 5,
      student: "ROGER SCOTT",
      course: "Computer Science",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      userImg: img.user1,
    },
  ];
  return (
    <div id="testimonial">
      <p className="title">Testimonial</p>
      <h1 className="heading">Our Successful Students</h1>
      <Swiper
        autoplay={{ delay: 4000, disableOnInteraction: false }}
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
        {info.map(({ id, student, course, desc, userImg }) => (
          <SwiperSlide key={id} className="swiper-slide">
            <div className="slide-header">
              <img src={userImg} alt={student} />
              <div>
                <h1 className="card-heading">{student}</h1>
                <p className="title">{course}</p>
              </div>
            </div>
            <p className="card-para">{desc}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MotionWrapper(Testimonial, "testimonial");
