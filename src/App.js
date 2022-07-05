// import { useEffect, useState } from "react";
import { Banner } from "./Components";
import {
  About,
  Explore,
  Header,
  Pricing,
  Services,
  Testimonial,
} from "./Containers";

function App() {
  return (
    <>
      <Header />
      <About />
      <Banner />
      <Services />
      <Explore />
      <Testimonial />
      <Pricing />
    </>
  );
}

export default App;
