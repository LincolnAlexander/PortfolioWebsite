import React, { useEffect, useRef, useState } from "react";
import Bitmoji1 from "../images/Bitmoji1.png";
function About() {
  return (
    <div id="about" className="flex flex-col h-screen items-center text-3xl ">
      <div className="flex flex-col justify-center w-full h-full">
        <div className="flex justify-center">
          {/* <img className="" src={Bitmoji1}></img> */}
          <p></p>
          <p className=" font-medium self-center  text-center text-4xl md:text-7xl text-white">
            About Me<img className="inline" src={Bitmoji1}></img>
          </p>
        </div>

        <div className="flex justify-center self-center items-center w-1/2 h-1/3 mt-8 bg-violet rounded  drop-shadow-xl">
          <p className="text-silver text-lg font-medium m-12">
            Hi! My name is Lincoln Alexander. I’m currently a junior at the
            University Central Florida studying Computer Science. I am highly
            passionate about software engineering, and problem-solving, and have
            a pure devotion to technology and development 👨🏽‍💻. I am well versed
            in multiple programming languages including: Java, C, JavaScript,
            React, HTML & CSS. I like to extend myself to learn other skills
            such as: Figma, Canva, and frameworks. In my free time I enjoy
            practicing my programming skills with different projects, and
            listening to Music 🎧.{" "}
          </p>
        </div>
      </div>
      <div id="projects">Projects</div>
    </div>
  );
}

export default About;
