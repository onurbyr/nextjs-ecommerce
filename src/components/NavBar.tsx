import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { PiCurrencyDollarBold } from "react-icons/pi";

const NavBar = () => {
  interface NavBarLeftItemProps {
    icon: React.ReactNode;
    text: string;
  }
  const NavBarItem = ({ icon, text }: NavBarLeftItemProps) => {
    return (
      <a href="#" className="flex flex-row items-center">
        <div className="text-main-red">{icon}</div>
        <div className="ml-2 text-sm  text-slate-200 hover:text-main-red">
          {text}
        </div>
      </a>
    );
  };

  return (
    <div className="bg-[#1E1F29] py-3">
      <div className="max-width px-3 flex flex-col md:flex-row md:justify-between gap-3 ">
        <div className="flex flex-row gap-3 item-center">
          <NavBarItem icon={<MdPhone />} text="+021-95-51-84" />
          <NavBarItem icon={<IoMailOutline />} text="email@email.com" />
          <NavBarItem icon={<MdLocationOn />} text="1734 Stonecoal Road" />
        </div>
        <div className="flex flex-row gap-3 item-center">
          <NavBarItem icon={<PiCurrencyDollarBold />} text="USD" />
          <NavBarItem icon={<BsFillPersonFill />} text="My Account" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
