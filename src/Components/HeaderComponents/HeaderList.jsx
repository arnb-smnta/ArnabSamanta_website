import React from "react";
import { menulistitems } from "../../Constants/Constants";

const HeaderList = () => {
  return (
    <div className="bg-blue-400">
      <ul className="flex justify-center">
        {menulistitems.map((m, index) => (
          <li key={index} className="pl-4 hover:underline font-extrabold pt-2">
            <a href="/">{m}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderList;
