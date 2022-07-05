// import { useEffect, useState } from "react";
import { Banner } from "./Components";
import { About, Explore, Header, Services } from "./Containers";

function App() {
  return (
    <>
      <Header />
      <About />
      <Banner />
      <Services />
      <Explore />
    </>
  );
}

export default App;
