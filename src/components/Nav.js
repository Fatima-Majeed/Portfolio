import React from "react";

// import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import {
  BsCliboardData,
  BsBriefcase,
  BsChatSquare,
  BsChatSquareText,
  BsCCircleFill,
  BsBackpack2Fill,
} from "react-icons/bs";

import { Link } from "react-scroll";




const Nav = () => {
  return (
    <nav className="fixed bottom-1 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div
          className="w-full bg-black/20 h-[80px] backdrop-blur-2xl backdrop-blur-2xl 
          rounded-full max-w-[470px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center"
        >
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] justify-center flex items-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px]  h-[60px] justify-center flex items-center"
          >
            <BiUser />
          </Link>
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] justify-center flex items-center"
          >
            <BsBackpack2Fill />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] justify-center flex items-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] justify-center flex items-center"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

// const Nav = () => {
//   return <div>Nav</div>;
// };

export default Nav;
