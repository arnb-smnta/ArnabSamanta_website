import React from "react";

const SkillList = ({ skills }) => {
  return (
    <div>
      <h1 className="text-3xl m-2 text-center text-white">{skills.Skills}</h1>
      <p className="text-2xl m-2 text-white">{skills.about}</p>
      <ul className="text-center text-white">
        {skills.SkillSet.map((s, index) => (
          <li key={index} className="text-xl">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
