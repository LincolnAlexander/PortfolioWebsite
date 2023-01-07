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
    <div className="flex flex-col " id="PortfolioWebsite">
      <div className="bg-gradient bg-no-repeat bg-cover">
        <Navbar className="" />
        <Intro className="" />
      </div>
      <div className="bg-gradient-to-b from-zinc-900 to-silver">
        <About className="" />
      </div>
    </div>
  );
}

export default HomePage;
