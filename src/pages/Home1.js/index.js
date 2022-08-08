import React from "react";
import Features from "./components/Features";

import Header from "./components/Header";
import Integration from "./components/Integration";
import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Sponcers from "./components/Sponcers";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
     <Sponcers/>
      <Section1 />
      <Section2 />
  <Features/>
  <Integration/>
    </div>
  );
}
