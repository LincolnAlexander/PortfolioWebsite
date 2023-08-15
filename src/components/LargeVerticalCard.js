import { useState, useEffect } from "react";
import _ from "lodash";
import { useInView } from "react-intersection-observer";

function LargeVerticalCard(props) {
  const [ref, inView] = useInView();
  const [projectScreenshot, setProjectScreenshot] = useState();
  const [projectIcons, setProjectIcons] = useState();
  const [projectTitle, setProjectTitle] = useState();
  useEffect(() => {
    setProjectScreenshot(props.projectScreenshot);
    setProjectIcons(props.projectIcons);
    setProjectTitle(props.projectTitle);
  }, [props.inView]);
  return (
    <div
      ref={ref}
      className={
        inView === true
          ? "animate-fadeInRight flex flex-col h-128 rounded-md bg-black_1 shadow-xl bg-opacity-100 last-of-type:"
          : "flex flex-col  h-128 rounded-md bg-black_1 shadow-xl bg-opacity-100"
      }
    >
      <div className="flex flex-col bg-black_1  justify-center items-center h-2/5 w-full ">
        <div className="h-5/6 w-5/6  bg-transparent rounded-xl ">
          <img
            className=" w-full h-full rounded-md "
            src={projectScreenshot}
          ></img>
        </div>
      </div>
      <div className="flex flex-col items-center  w-full h-1/2 mt-4 mb-4 ">
        <p className="text-xl font-medium w-5/6 mb-1 text-silver">
          {projectTitle}
        </p>
        <div className="flex flex-wrap justify-start  md:w-5/6 m-1">
          {_.map(projectIcons, (icon) => {
            return (
              <img key={icon} alt="Icon logo" className="mr-4" src={icon} />
            );
          })}
        </div>
        <p className="text-sm sm:text-base text-silver w-5/6 m-1">
          {props.children}
        </p>
      </div>
    </div>
  );
}

export default LargeVerticalCard;
