import React, { useEffect, useState } from "react";
import { textanimationlist } from "../../Constants/Constants";

const TextAnimation = () => {
  useEffect(() => {
    const i = setInterval(() => {
      changetam();
    }, 2000);
    return () => clearInterval(i);
  });
  const [tam, usetam] = useState(0);
  const changetam = () => {
    if (tam === 3) {
      usetam(0);
    } else usetam(tam + 1);
  };
  return (
    <div className="text-6xl absolute">
      <p className="text-white">I am a {textanimationlist[tam]}</p>
    </div>
  );
};

export default TextAnimation;
