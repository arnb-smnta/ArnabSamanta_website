import React from "react";
import TextAnimation from "./BodyComponents/TextAnimation";
import AboutMe from "./BodyComponents/AboutMe";
import SkillSet from "./BodyComponents/SkillSet";
import InspiringQuotes from "./BodyComponents/InspiringQuotes";

const Body = () => {
  return (
    <div>
      <div className="bg-cyan-500  justify-center mx-6 my-2 h-[48rem] grid grid-flow-row">
        <div className="border border-red-600 row-span-4">
          {" "}
          <img
            src="https://akshaysaini.in/img/plane.gif"
            alt=""
            className="w-[18rem] h-[18rem]"
          />
        </div>
        <div className="row-span-8">
          <TextAnimation />
        </div>
      </div>
      <AboutMe />
      <SkillSet />
      <InspiringQuotes />
    </div>
  );
};

export default Body;
