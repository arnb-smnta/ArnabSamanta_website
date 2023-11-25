import React from "react";
import { Quotes } from "../../Constants/Constants";

const InspiringQuotes = () => {
  return (
    <div className="border border-black mx-auto  items-center w-[64rem] h-[24rem] bg-red-500">
      <div>
        <h1 className="text-4xl mx-auto w-[24rem]">Inspiring Quotes</h1>
      </div>
      <div className="flex overflow-x-scroll">
        {Quotes.map((quote) => (
          <div className="flex h-[24rem]">
            <img className="h-[12rem]" src={quote.imglink} alt="image" />
            <p className="m-4 ">{quote.quote}</p>
            <p>by {quote.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InspiringQuotes;
