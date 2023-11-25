import React from "react";

const SkillList = ({ skills }) => {
  return (
    <div>
      <h1 className="text-3xl m-2 text-center">{skills.Skills}</h1>
      <p className="text-2xl m-2">{skills.about}</p>
      <ul className="text-center">
        {skills.SkillSet.map((s) => (
          <li className="text-xl">{s}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
