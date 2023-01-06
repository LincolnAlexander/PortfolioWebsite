import React from "react";
import { BrowserRouter } from "react-router-dom";
import About from "./About";
import Nav from "./Nav";
import Navbar from "./Navbar";
import Intro from "./Intro";
import { ReactComponent as Background } from "../images/BackgroundGradient.svg";
function HomePage() {
  return (
    <div
      className="flex flex-col bg-gradient bg-no-repeat bg-cover"
      id="PortfolioWebsite"
    >
      {/* <Nav className="fixed top-0 block"></Nav> */}
      <Navbar className=" " />
      <Intro className="" />
      <About />
    </div>
  );
}

export default HomePage;
