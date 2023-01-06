import React from "react";
import { BrowserRouter } from "react-router-dom";
import About from "./About";
import Nav from "./Nav";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Projects from "./Projects";
import Contact from "./Contact";
import { ReactComponent as Background } from "../images/BackgroundGradient.svg";
function HomePage() {
  return (
    <div
      className="flex flex-col bg-gradient bg-no-repeat bg-cover"
      id="PortfolioWebsite"
    >
      <title>HTML Elements Reference</title>
      {/* <Nav className="fixed top-0 block"></Nav> */}
      <Navbar className=" " />
      <Intro className="" />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default HomePage;
