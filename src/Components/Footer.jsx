import React from "react";

const Footer = () => {
  return (
    <div className="border border-black mt-[12rem] mb-2 mx-6 h-[24rem] grid-flow-row">
      <div className="row-span-6 border border-black  w-[72rem] mx-auto">
        <h1 className="text-4xl">Arnab Samanta</h1>
        <p>No Copy rigt isuues</p>
      </div>
      <div className="row-span-6 border border-black">
        <img
          className="w-[72rem] mx-auto mt-[8rem]"
          src="https://akshaysaini.in/img/foot.jpg"
          alt="Footerimage"
        />
      </div>
    </div>
  );
};

export default Footer;
