import React from "react";

import HeaderList from "./HeaderComponents/HeaderList";

const Header = () => {
  return (
    <div className="flex justify-between mx-6 bg-blue-400 h-16 fixed border border-black w-[100%]">
      <div className="">
        <img
          src="https://cdn.icon-icons.com/icons2/2036/PNG/512/menu_circular_button_burger_icon_124214.png"
          alt="Menu Icon"
          className="h-12"
        />
      </div>
      <div className=" ">
        <div>
          <HeaderList />
        </div>
      </div>
      <button className=" border border-black">Darkmode</button>
    </div>
  );
};

export default Header;
