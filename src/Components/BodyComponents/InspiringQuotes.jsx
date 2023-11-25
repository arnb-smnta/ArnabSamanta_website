import React from "react";
import { Quotes } from "../../Constants/Constants";

const InspiringQuotes = () => {
  return (
    <div className="border border-black mx-6 my-6 flex justify-center items-center">
      <div>
        <h1 className="text-4xl">Inspiring Quotes</h1>
      </div>
      <div>
        <img src={Quotes[0].imglink} alt="image" />
        <p>{Quotes[0].quote}</p>
        <p>by {Quotes[0].name}</p>
      </div>
    </div>
  );
};

export default InspiringQuotes;
