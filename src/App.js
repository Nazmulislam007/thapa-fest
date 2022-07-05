// import { useEffect, useState } from "react";
import { Banner } from "./Components";
import { About, Explore, Header, Services, Testimonial } from "./Containers";

function App() {
  return (
    <>
      <Header />
      <About />
      <Banner />
      <Services />
      <Explore />
      <Testimonial />
    </>
  );
}

export default App;
