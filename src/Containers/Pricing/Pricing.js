import React from "react";
import MotionWrapper from "../../wrapper/MotionWrapper";
import "./Pricing.scss";

const Pricing = () => {
  const info = [
    {
      id: 1,
      plan: "Basic Plan",
      price: "49k",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 2,
      plan: "Beginner Plan",
      price: "79k",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 3,
      plan: "premium Plan",
      price: "108k",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 4,
      plan: "ultimate Plan",
      price: "149k",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];
  return (
    <div id="price">
      <p className="title">Pricing</p>
      <h1 className="heading">Pricing & Packages</h1>

      <div className="wrapper">
        {info.map(({ id, plan, price, desc }) => (
          <div key={id} className="card">
            <p className="plan">{plan}</p>
            <h1 className="price">
              <span>$</span>
              {price}
            </h1>
            <p className="card-para">{desc}</p>
            <a href="/" className="btn btn-enroll">
              Get Started
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MotionWrapper(Pricing, "price");
