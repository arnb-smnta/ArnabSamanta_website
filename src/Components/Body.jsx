import React from "react";
import TextAnimation from "./BodyComponents/TextAnimation";
import AboutMe from "./BodyComponents/AboutMe";
import SkillSet from "./BodyComponents/SkillSet";
import InspiringQuotes from "./BodyComponents/InspiringQuotes";

const Body = () => {
  return (
    <div>
      <div className="  justify-center mx-6  h-[48rem] grid grid-flow-row bg-[url('https://cdn.openart.ai/stable_diffusion/fc0ba13dc18d360b85bfa64bb2059808179e86ef_2000x2000.webp')] bg-cover">
        <div className=" w-[28rem] row-span-4 mt-[4rem] ">
          {" "}
          <img
            src="https://akshaysaini.in/img/plane.gif"
            alt=""
            className="w-[100%] relative rounded-full"
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
