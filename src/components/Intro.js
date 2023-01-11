import React, { useEffect, useState } from "react";
import GithubLink from "../images/Github.png";
import LinkedInLink from "../images/Linkedin.png";
import ResumeLink from "../images/Resume.png";

import { useInView } from "react-intersection-observer";
function Intro() {
  const user = {
    linkedin: "https://www.linkedin.com/in/lincoln-alexander-2312ab193/",
    github: "https://github.com/LincolnAlexander",
    resume:
      "https://drive.google.com/file/d/1zQZhGUNPdaneJVog1L1xhchhaPNyOhON/view?usp=sharing",
  };

  let [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      //console.log("In view");
      inView = !inView;
    }
  }, [inView]);
  return (
    <div className="h-screen text-white flex justify-center items-center flex-col  ">
      <div
        ref={ref}
        className="flex w-screen h-screen sm:h-1/2 sm:w-1/2 flex-col text-center mt-40 sm:mt-0"
      >
        <div className="mb-4 ">
          {/* <p className="font-medium text-2xl md:text-3xl font-semibold"> */}
          <p
            className={
              inView === true
                ? "font-medium text-2xl md:text-3xl font-semibold animate-bounceInLeft"
                : "font-medium text-2xl md:text-3xl font-semibold text-black"
            }
          >
            Hello 👋,
          </p>
        </div>
        <div className="mb-4">
          <p
            className={
              inView === true
                ? "font-medium text-4xl md:text-7xl animate-bounceInRight"
                : "font-medium text-4xl md:text-7xl"
            }
          >
            I’m
            <span className="font-medium text-4xl md:text-7xl text-transparent bg-clip-text font-black leading-loose bg-gradient-to-r from-indigo-400 to-silver ml-4">
              Lincoln
            </span>
          </p>
        </div>
        <div className="mb-4">
          <p
            className={
              inView === true
                ? "animate-bounceInLeft font-medium text-xl md:text-3xl font-semibold"
                : "font-medium text-xl md:text-3xl font-semibold"
            }
          >
            Software Engineer, Front-end Developer 💻
          </p>
        </div>
        <div
          className={
            inView === true
              ? "flex justify-center m-4 animate-fadeInUp "
              : "flex justify-center m-4"
          }
        >
          <a
            className="w-16 drop-shadow-2xl transition duration-300 ease-in-out hover:animate-tada"
            href={user.github}
            target="_blank"
            rel="noreferrer"
          >
            <img alt="GitHub Link" src={GithubLink}></img>
          </a>
          <a
            className="w-16 mr-12 ml-12 drop-shadow-2xl transition duration-300 ease-in-out hover:animate-tada"
            href={user.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <img alt="LinkedIn Link" src={LinkedInLink}></img>
          </a>
          <a
            className="w-16 drop-shadow-2xl transition duration-300 ease-in-out hover:animate-tada"
            href={user.resume}
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="Lincoln Alexander Resume"
              src={ResumeLink}
              title="Open Lincoln's Resume"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
