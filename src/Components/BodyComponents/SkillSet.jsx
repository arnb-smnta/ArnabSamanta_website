import React, { useState } from "react";
import { skills } from "../../Constants/Constants";
import SkillList from "./SkillList";
import { useSelector } from "react-redux";

const SkillSet = () => {
  const [buttonClicked, setbuttonClicked] = useState(false);
  const resumeClicked = () => {
    setbuttonClicked(!buttonClicked);
  };
  const dark = useSelector((AppStore) => AppStore.textvisible);
  return (
    <div
      className={`m-6  border border-black text-white ${
        dark ? "bg-black" : " bg-purple-600"
      }`}
      id="skills"
    >
      <div className="flex justify-between">
        {skills.map((s, index) => (
          <SkillList skills={s} key={index} />
        ))}
      </div>
      <div className="mt-[8rem] flex justify-center ">
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
