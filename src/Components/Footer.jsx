import React from "react";
import { img_link } from "../Constants/Constants";

const Footer = () => {
  return (
    <div className="m-6 border border-black h-[26rem] grid grid-flow-row">
      <div className="row-span-6 flex border border-black h-[12rem] justify-between">
        <div className="Arnab">
          <p className="text-4xl font-">Feel free to copy</p>
        </div>
        <div>
          <p>Arnab Samanta</p>
        </div>
        <div>
          <p>Connect with me</p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-2xl">Made in India with love </p>
      </div>
      <div className="row-span-6">
        <img
          src={img_link.footer_img}
          alt="footerimg"
          className="w-[50%] h-[12rem] mx-auto "
        />
      </div>
    </div>
  );
};

export default Footer;
