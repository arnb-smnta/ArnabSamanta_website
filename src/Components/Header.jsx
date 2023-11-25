import React from "react";

import HeaderList from "./HeaderComponents/HeaderList";

const Header = () => {
  return (
    <div className="grid grid-flow-col mx-6 bg-blue-400 h-16 ">
      <div className="col-span-1">
        <img
          src="https://cdn.icon-icons.com/icons2/2036/PNG/512/menu_circular_button_burger_icon_124214.png"
          alt="Menu Icon"
          className="h-12"
        />
      </div>
      <div className="col-span-11 items-center">
        <div>
          <HeaderList />
        </div>
      </div>
    </div>
  );
};

export default Header;
