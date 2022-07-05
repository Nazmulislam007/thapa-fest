// import { useEffect, useState } from "react";
import { Banner, Copyw, NewsLetter } from "./Components";
import {
  About,
  Explore,
  Footer,
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
      <Footer />
      <Copyw />
    </>
  );
}

export default App;
