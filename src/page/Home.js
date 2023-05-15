import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

import Skilis from "../components/Skilis"

import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skilis/>
      
      <Contact />
    </>
  );
};

export default Home;
