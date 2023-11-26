import React, { useState } from "react";
import { skills } from "../../Constants/Constants";
import SkillList from "./SkillList";

const SkillSet = () => {
  const [buttonClicked, setbuttonClicked] = useState(false);
  const resumeClicked = () => {
    setbuttonClicked(!buttonClicked);
  };
  return (
    <div className="m-6 " id="skills">
      <div className="flex justify-between bg-black">
        {skills.map((s, index) => (
          <SkillList skills={s} key={index} />
        ))}
      </div>
      <div className="mt-[8rem] flex justify-center">
        <h1 className=" absolute text-2xl">Download My resume</h1>
        <div>
          <button onClick={resumeClicked}>
            <a
              href="/home/arnab/Desktop/code/Arnab_Sama-Website/src/Components/files/f.txt"
              download={"f.txt"}
            >
              <img
                src={
                  buttonClicked
                    ? "https://akshaysaini.in/img/dwnld.gif"
                    : "https://cdn.pixabay.com/photo/2016/12/18/13/45/download-1915753_960_720.png"
                }
                alt=""
                className="h-[12rem] m-[4rem]"
              />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
