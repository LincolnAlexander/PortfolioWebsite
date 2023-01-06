import React from "react";
import GithubLink from "../images/Github.png";
import LinkedInLink from "../images/Linkedin.png";
import ResumeLink from "../images/Resume.png";
function Intro() {
  const user = {
    linkedin: "https://www.linkedin.com/in/lincoln-alexander-2312ab193/",
    github: "https://github.com/LincolnAlexander",
    resume:
      "https://drive.google.com/file/d/1zQZhGUNPdaneJVog1L1xhchhaPNyOhON/view?usp=sharing",
  };
  return (
    <div className="h-screen text-black flex justify-center items-center flex-col  ">
      <div className="flex h-1/2 w-1/2 flex-col ">
        <div className="mb-4">
          <p className="font-medium text-4xl md:text-6xl ">Hello 👋,</p>
        </div>
        <div className="mb-4">
          <p className="font-medium text-4xl md:text-6xl">I’m Lincoln,</p>
        </div>
        <div className="mb-4">
          <p className="font-medium text-2xl md:text-4xl">
            Software Engineer, Front-end Developer 💻
          </p>
        </div>
        <div className="flex justify-center m-4 ">
          <a
            className="w-24 md:w-16 drop-shadow-2xl transition duration-300 ease-in-out hover:scale-110 "
            href={user.github}
            target="_blank"
          >
            <img src={GithubLink}></img>
          </a>
          <a
            className="w-24 md:w-16 mr-12 ml-12 drop-shadow-2xl transition duration-300 ease-in-out hover:scale-110"
            href={user.linkedin}
            target="_blank"
          >
            <img src={LinkedInLink}></img>
          </a>
          <a
            className="w-24 md:w-16 drop-shadow-2xl transition duration-300 ease-in-out hover:scale-110"
            href={user.resume}
            target="_blank"
          >
            <img src={ResumeLink}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
