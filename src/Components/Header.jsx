import React from "react";

import HeaderList from "./HeaderComponents/HeaderList";

const Header = () => {
  return (
    <div className="flex justify-between bg-blue-500 w-[80%] h-[100px] fixed  left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[50px]">
      <div className="">
        <img
          src="https://cdn.icon-icons.com/icons2/2036/PNG/512/menu_circular_button_burger_icon_124214.png"
          alt="Menu Icon"
          className="h-12"
        />
      </div>
      <div className=" ">
        <HeaderList />
      </div>
      <div>
        <button className=" border border-black">Darkmode</button>
      </div>
    </div>
  );
};

export default Header;
