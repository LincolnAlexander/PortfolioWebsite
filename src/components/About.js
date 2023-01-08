import React, { useEffect, useRef, useState } from "react";
import Bitmoji1 from "../images/Bitmoji1.png";
function About() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center w-full h-full m-20 border-2">
        <div id="about" className="flex justify-center">
          {/* <img className="" src={Bitmoji1}></img> */}

          <p className=" font-medium self-center  text-center text-4xl md:text-7xl text-white">
            About Me<img className="inline" src={Bitmoji1}></img>
          </p>
        </div>

        <div className="flex justify-center self-center items-center w-screen sm:w-1/2 h-full bg-violet rounded drop-shadow-xl border-2">
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
      <div
        className="flex flex-col justify-center items-center w-full h-full border m-20"
        id="projects"
      >
        <p className=" font-medium self-center text-center text-4xl md:text-7xl text-white">
          Projects
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2   border-2 h-full sm:w-2/3 md:w-screen xl:w-3/4 2xl:w-1/2 m-12">
          <div className="h-96  bg-gradient  "></div>
          <div className="h-96 bg-red-400"></div>
          <div className="h-96 bg-pink-400"></div>
          <div className="h-96 bg-gradient"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
