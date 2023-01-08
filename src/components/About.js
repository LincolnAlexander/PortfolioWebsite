import React, { useEffect, useRef, useState } from "react";
import Bitmoji1 from "../images/Bitmoji1.png";
import ReactLogo from "../images/React.svg";
import ExpressLogo from "../images/Express.svg";
import MongodbLogo from "../images/Mongodb.svg";
import TailwindLogo from "../images/Tailwind.svg";
import NodeLogo from "../images/Node.svg";

function About() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center w-full h-full m-20 ">
        <div id="about" className="flex justify-center">
          {/* <img className="" src={Bitmoji1}></img> */}

          <p className=" font-medium self-center  text-center text-4xl md:text-7xl text-white">
            About Me<img className="inline" src={Bitmoji1}></img>
          </p>
        </div>

        <div className="flex justify-center self-center items-center w-screen md:w-2/3 xl:w-1/2 h-full bg-black_1 rounded drop-shadow-xl ">
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
        className="flex flex-col justify-center items-center w-full h-full  m-20"
        id="projects"
      >
        <p className=" font-medium self-center text-center text-4xl md:text-7xl text-white">
          Projects
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:w-2/3 md:w-screen xl:w-3/4 2xl:w-1/2 m-12">
          <div className="flex flex-col  h-full h-128 rounded-md bg-black_1 shadow-xl bg-opacity-100">
            <div className="flex flex-col justify-center items-center h-2/3 w-full ">
              <div className="bg-cinema_bg bg-cover bg-cover bg-center bg-no-repeat h-5/6 w-5/6 shadow-xl rounded-xl"></div>
            </div>
            <div className="flex flex-col  items-center w-full h-1/2">
              <p className="text-xl font-medium w-5/6 mb-1 text-silver">
                CinemaGuesser
              </p>
              <div className="flex justify-start w-5/6 m-1">
                <img className="mr-4" src={MongodbLogo}></img>
                <img className="mr-4" src={ExpressLogo}></img>
                <img className="mr-4" src={ReactLogo}></img>
                <img className="mr-4" src={NodeLogo}></img>
                <img src={TailwindLogo}></img>
              </div>
              <p className="text-base text-silver w-5/6 m-1">
                Cinema Guesser 📀❓, a movie guessing game aimed to challenge
                users to guess the movie score out of one hundred points. The
                closer you are to the Rotten Tomatoes/IMDB score, the more
                points you earn. When you aren't plating you can check the
                leaderboard page and add movies to your personal wacthlist!
              </p>
              <div className="flex"></div>
            </div>
          </div>

          <div className="h-96 bg-red-400"></div>
          <div className="h-96 bg-pink-400"></div>
          <div className="h-96 bg-gradient"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
