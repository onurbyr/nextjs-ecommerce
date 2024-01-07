import React from "react";
import { Divider } from "../components";

import { IoMailOutline } from "react-icons/io5";
import { MdLocationOn, MdPhone } from "react-icons/md";
import {
  FaCcVisa,
  FaCreditCard,
  FaCcPaypal,
  FaCcMastercard,
  FaCcDiscover,
} from "react-icons/fa";

interface FooterSectionProps {
  title: string;
  explanation?: string;
  elements: Array<{
    logo?: React.ReactNode;
    title: string;
  }>;
}
const FooterSection = ({
  title,
  explanation,
  elements,
}: FooterSectionProps) => {
  return (
    <div>
      <p className="text-lg text-main-text font-bold mb-5">{title}</p>
      {explanation ? (
        <p className="text-secondary-text mb-2">{explanation}</p>
      ) : null}
      <ul>
        {elements.map((el, index) => {
          return (
            <li
              key={index}
              className="text-secondary-text flex items-center mt-3"
            >
              {el.logo ? (
                <div className="mr-3 text-main-red">{el.logo}</div>
              ) : null}
              <a className="hover:text-main-red" href="#">
                {el.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="mt-auto">
      <Divider color="#D10024" size="3px" />
      <div className="bg-[#15161D]  ">
        <div className="max-width py-10 px-3 grid grid-cols-2 gap-5 md:grid-cols-4 ">
          <FooterSection
            title="ABOUT US"
            explanation="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut."
            elements={[
              { logo: <MdLocationOn size="1.2rem" />, title: "Address" },
              { logo: <MdPhone size="1.2rem" />, title: "+012-34-56-78" },
              {
                logo: <IoMailOutline size="1.2rem" />,
                title: "email@email.com",
              },
            ]}
          />
          <FooterSection
            title="CATEGORIES"
            elements={[
              { title: "Hot Deals" },
              { title: "Laptops" },
              { title: "Smartphones" },
              { title: "Cameras" },
              { title: "Accessories" },
            ]}
          />
          <FooterSection
            title="INFORMATION"
            elements={[
              { title: "About Us" },
              { title: "Contact Us" },
              { title: "Privacy Policy" },
              { title: "Orders and Returns" },
              { title: "Terms & Conditions" },
            ]}
          />
          <FooterSection
            title="SERVICE"
            elements={[
              { title: "My Account" },
              { title: "View Cart" },
              { title: "Wishlist" },
              { title: "Track My Order" },
              { title: "Help" },
            ]}
          />
        </div>
      </div>
      <div className="bg-[#1E1F29]">
        <div className="max-width flex flex-col items-center py-10">
          <div className="flex gap-2 mb-4 text-4xl opacity-50">
            <FaCcVisa />
            <FaCreditCard />
            <FaCcPaypal />
            <FaCcMastercard />
            <FaCcDiscover />
          </div>
          <p className="text-secondary-text text-xs">
            Copyright ©2023 All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
