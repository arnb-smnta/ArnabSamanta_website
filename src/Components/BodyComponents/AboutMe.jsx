import React from "react";
import { LogoList } from "../../Constants/Constants";

const AboutMe = () => {
  return (
    <div className="border border-black mx-[18rem] my-4 h-[48rem] grid grid-flow-col">
      <div className="border border-blue-500 col-span-4">
        <img
          src="https://scontent.fccu2-1.fna.fbcdn.net/v/t39.30808-6/272718681_616159903018088_9094523673140263091_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UGPb_CJYraYAX_nggDt&_nc_ht=scontent.fccu2-1.fna&oh=00_AfAhFdutlnmyAHPAGWIi_qF74RBW4tk_xbn4lsZLWipBxQ&oe=6566D855"
          alt="Profile Picture"
          className="rounded-full h-[24rem] my-[8rem] ml-[8rem]"
        />

        <div className="flex w-[20%] mx-4">
          {LogoList.map((logo) => (
            <img src={logo.link} alt={logo.name} className="m-2" />
          ))}
        </div>
      </div>

      <div className="col-span-8">
        <h1 className="text-8xl m-8">About Me</h1>

        <p className="text-3xl m-8">
          Hi I am Arnab ,23 year old Software deeloper living in serampore west
          bengal ,loves to trade the markets and love to eat blah blah blah
          blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah
          blah blahblah blah blah blahblah blah blah blahblah blah blah blah
        </p>

        <p className="text-3xl m-8">
          Hi I am Arnab ,23 year old Software deeloper living in serampore west
          bengal ,loves to trade the markets and love to eat blah blah blah
          blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah
          blah blahblah blah blah blahblah blah blah blahblah blah blah blah
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
