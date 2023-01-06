import React from "react";
import { BrowserRouter } from "react-router-dom";
import About from "./About";
import Nav from "./Nav";
import Navbar from "./Navbar";
import Intro from "./Intro";
function HomePage() {
  return (
    <div
      className="bg-gradient bg-cover bg-center bg-fixed flex flex-col"
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
