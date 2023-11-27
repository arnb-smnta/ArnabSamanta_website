import React, { useEffect, useState } from "react";
import { Quotes } from "../../Constants/Constants";
import { useSelector } from "react-redux";

const InspiringQuotes = () => {
  const [quote, setquote] = useState(0);
  useEffect(() => {
    const i = setInterval(() => {
      changequote();
    }, 1000);
    return () => clearInterval(i);
  });

  const changequote = () => {
    if (quote === Quotes.length - 1) {
      setquote(0);
    } else setquote(quote + 1);
  };
  const dark = useSelector((AppStore) => AppStore.textvisible);
  return (
    <div
      className={`border border-black mx-auto  items-center w-[90%] h-[48rem] ${
        dark ? "bg-gray-700" : "bg-red-600"
      }`}
    >
      <div className="w-[40%] m-auto">
        <h1 className="text-8xl text-white">Inspiring Quotes</h1>
      </div>
      <div className="m-[2rem]">
        <img
          src={Quotes[quote].imglink}
          alt=""
          className="w-[20%] m-auto h-[16rem] rounded-full"
        />
      </div>
      <div className="text-center w-[80%] m-auto">
        <p className="text-white text-4xl">"{Quotes[quote].quote}"</p>
      </div>
    </div>
  );
};

export default InspiringQuotes;
