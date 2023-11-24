import React, { useEffect, useState } from "react";
import { textanimationlist } from "../../Constants/Constants";
import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  useEffect(() => {
    const i = setInterval(() => {
      changetam();
    }, 500);
    return () => clearInterval(i);
  });
  const [tam, usetam] = useState(0);
  const changetam = () => {
    if (tam === 3) {
      usetam(0);
    } else usetam(tam + 1);
  };
  return (
    <div className="text-6xl w-max">
      <p>
        I am a{" "}
        <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-5xl text-black font-bold">
          {textanimationlist[tam]}{" "}
        </p>
      </p>
    </div>
  );
};

export default TextAnimation;
