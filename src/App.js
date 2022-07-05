// import { useEffect, useState } from "react";
import { Banner, NewsLetter } from "./Components";
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
      <NewsLetter />
    </>
  );
}

export default App;
