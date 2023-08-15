import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Bitmoji1 from "../images/Bitmoji1.png";
import ReactLogo from "../images/React.svg";
import ExpressLogo from "../images/Express.svg";
import MongodbLogo from "../images/Mongodb.svg";
import TailwindLogo from "../images/Tailwind.svg";
import NodeLogo from "../images/Node.svg";
import ApacheLogo from "../images/Apache.svg";
import LinuxLogo from "../images/Linux.svg";
import HtmlLogo from "../images/html.svg";
import CssLogo from "../images/css.svg";
import MysqlLogo from "../images/Mysql.svg";
import PhpLogo from "../images/php.svg";
import GithubLink from "../images/Github.png";
import LinkedInLink from "../images/Linkedin.png";
import MessageLink from "../images/Message.png";
import CinemaBG from "../images/CinemaGuesserImage13.PNG";
import ContactBG from "../images/ContactManagerImage2.PNG";
import LargeVerticalCard from "./LargeVerticalCard";

function About() {
  const user = {
    linkedin: "https://www.linkedin.com/in/lincoln-alexander-2312ab193/",
    github: "https://github.com/LincolnAlexander",
    mail: "mailto: lincolndalexander@gmail.com",
  };

  let [ref, inView] = useInView();
  let [ref1, inView1] = useInView();
  let [ref2, inView2] = useInView();

  useEffect(() => {
    if (inView) inView = false;
  }, [inView]);

  useEffect(() => {
    if (inView1) inView1 = false;
  }, [inView1]);

  useEffect(() => {
    if (inView2) inView2 = false;
  }, [inView2]);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center w-full h-full m-20 ">
        <div
          ref={ref}
          id="about"
          className={
            inView === true
              ? "animate-pulse flex justify-center"
              : "flex justify-center"
          }
        >
          <p className=" font-medium self-center  text-center text-4xl md:text-7xl text-white">
            About Me
            <img
              alt="Lincoln BitMoji "
              className="inline h-28 md:h-36 lg:h-auto"
              src={Bitmoji1}
            ></img>
          </p>
        </div>

        <div
          className={
            inView === true
              ? " flex justify-center self-center items-center w-screen md:w-2/3 xl:w-1/2 h-full bg-black_1 rounded drop-shadow-xl animate-fadeInUp"
              : "flex justify-center self-center items-center w-screen md:w-2/3 xl:w-1/2 h-full bg-black_1 rounded drop-shadow-xl "
          }
        >
          <p
            className={
              inView === true
                ? "text-silver text-lg font-medium m-12"
                : "text-silver text-lg font-medium m-12"
            }
          >
            Hi! My name is Lincoln Alexander. I’m currently a senior at the
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
        className="flex flex-col justify-center items-center w-full h-full  m-28"
        id="projects"
      >
        <p
          className={
            inView1 === true
              ? "animate-zoomIn font-medium self-center text-center text-4xl md:text-7xl text-white"
              : "font-medium self-center text-center text-4xl md:text-7xl text-white"
          }
        >
          Projects
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-screen md:w-3/4 lg:w-4/5 2xl:w-1/2 m-12">
          <LargeVerticalCard
            projectScreenshot={CinemaBG}
            projectTitle="CinemaGuesser"
            projectIcons={[
              MongodbLogo,
              ExpressLogo,
              ReactLogo,
              NodeLogo,
              TailwindLogo,
            ]}
          >
            Cinema Guesser 📀❓, a movie guessing game aimed to challenge users
            to guess the movie score out of one hundred points, given details
            about the movie. The closer you are to the Rotten Tomatoes score,
            the more points you earn. When you aren't playing you can check the
            leaderboard page 🥇 and add movies to your personal wacthlist ➕📄!
            This web application we integrated OMDB API, User Authentication,
            Email verification, and more features.
          </LargeVerticalCard>
          <LargeVerticalCard
            projectScreenshot={ContactBG}
            projectTitle="Contacts4U"
            projectIcons={[
              LinuxLogo,
              ApacheLogo,
              MysqlLogo,
              PhpLogo,
              HtmlLogo,
              CssLogo,
            ]}
          >
            Contacts4U 📞 is a contact manager application allowing users to
            store and organize contact information for individuals, businesses,
            and organizations. Application includes features such as the ability
            to add/delete and edit contact details, and search for contacts by
            name.
          </LargeVerticalCard>
          <LargeVerticalCard></LargeVerticalCard>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center w-full h-full  m-20"
        id="contact"
      >
        <p
          className={
            inView2 === true
              ? "animate-slideInDown font-medium self-center text-center text-4xl md:text-7xl text-white mb-12"
              : "font-medium self-center text-center text-4xl md:text-7xl text-white mb-12 "
          }
        >
          Contact
        </p>
        <div
          ref={ref2}
          className="flex flex-col justify-center self-center items-center w-screen md:w-2/3 xl:w-1/2 h-full bg-black_1 rounded drop-shadow-xl "
        >
          <div className={inView2 === true ? "animate-slideInUp" : ""}>
            <p className="text-silver  text-lg font-medium m-12  ">
              I'm currently looking for a Summer 23' Internship, and also open
              to working on small/medium projects. I have excellent
              communication skills for working with both technical and
              non-technical stakeholders. I have strong problem solving and
              debugging skills and work well in teams.{" "}
            </p>
            <div className="flex justify-center m-8">
              <a
                className="w-16  drop-shadow-2xl transition duration-300 ease-in-out hover:animate-tada"
                href={user.mail}
                target="_blank"
                rel="noreferrer"
              >
                <img alt="Email Link" src={MessageLink}></img>
              </a>
              <a
                className="w-16 mr-12 ml-12 drop-shadow-2xl transition duration-300 ease-in-out hover:animate-tada "
                href={user.github}
                target="_blank"
                rel="noreferrer"
              >
                <img alt="GitHub Link" src={GithubLink}></img>
              </a>
              <a
                className="w-16  drop-shadow-2xl transition duration-300 ease-in-out hover:animate-tada"
                href={user.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <img alt="LinkedIn Link" src={LinkedInLink}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 h-20 w-full bg-gradient flex justify-center items-center flex-col">
        <p className="text-center text-white text-base ">
          Thank You for visiting, have a great day!
        </p>
        <p className="text-silver text-sm mt-2">
          &#169; Designed and Built by Lincoln Alexander
        </p>
      </div>
    </div>
  );
}

export default About;
