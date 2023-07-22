"use client";

import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMailOutline, IoCart } from "react-icons/io5";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { PiCurrencyDollarBold } from "react-icons/pi";
import Image from "next/image";
import { Divider, InputWithButton } from "../components";

interface NavBarLeftItemProps {
  icon: React.ReactNode;
  text: string;
}
const NavBarItem = ({ icon, text }: NavBarLeftItemProps) => {
  return (
    <a href="#" className="flex flex-row items-center">
      <div className="text-main-red">{icon}</div>
      <div className="ml-2 text-sm  text-main-text hover:text-main-red">
        {text}
      </div>
    </a>
  );
};

const NavBar = () => {
  const [value, setValue] = useState<string>("");

  return (
    <>
      <div className="bg-[#1E1F29] py-3">
        <div className="max-width px-3 xl:px-0 flex flex-col md:flex-row md:justify-between gap-3 ">
          <div className="flex flex-row gap-3">
            <NavBarItem icon={<MdPhone />} text="+021-95-51-84" />
            <NavBarItem icon={<IoMailOutline />} text="email@email.com" />
            <NavBarItem icon={<MdLocationOn />} text="1734 Stonecoal Road" />
          </div>
          <div className="flex flex-row gap-3 ">
            <NavBarItem icon={<PiCurrencyDollarBold />} text="USD" />
            <NavBarItem icon={<BsFillPersonFill />} text="My Account" />
          </div>
        </div>
      </div>
      <div className="bg-[#15161D] py-3">
        <div className="max-width px-3 xl:px-0 gap-3 flex flex-col md:flex-row items-center md:justify-between">
          <Image
            src={"/applogo.png"}
            alt="logo"
            width={170}
            height={70}
            priority
          />
          <InputWithButton
            placeholder="Search here"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            buttonTitle="Search"
          />
          <div className="text-main-text flex flex-col items-center ">
            <IoCart size="1.8rem" />
            <div>Your Cart</div>
          </div>
        </div>
      </div>
      <Divider color="#D10024" size="3px" />
    </>
  );
};

export default NavBar;
