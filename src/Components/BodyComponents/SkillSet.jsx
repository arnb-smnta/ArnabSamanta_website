import React, { useState } from "react";
import { skills } from "../../Constants/Constants";
import SkillList from "./SkillList";

const SkillSet = () => {
  const [buttonClicked, setbuttonClicked] = useState(false);
  const resumeClicked = () => {
    setbuttonClicked(!buttonClicked);
  };
  return (
    <div className="m-6 border border-black">
      <div className="flex justify-between">
        {skills.map((s, index) => (
          <SkillList skills={s} key={index} />
        ))}
      </div>
      <div className="mt-[8rem] border border-blue-950 flex justify-center">
        <h1 className="border border-black absolute text-2xl">
          Download My resume
        </h1>
        <div>
          <button onClick={resumeClicked}>
            <img
              src={
                buttonClicked
                  ? "https://akshaysaini.in/img/dwnld.gif"
                  : "https://cdn.pixabay.com/photo/2016/12/18/13/45/download-1915753_960_720.png"
              }
              alt=""
              className="h-[12rem] m-[4rem]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
