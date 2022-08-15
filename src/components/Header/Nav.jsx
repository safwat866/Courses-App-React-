import React from "react";
import { HiMenu } from "react-icons/hi";
import Btn from "../UI/Btn";
import NavItems from "./NavItems";

const Nav = (props) => {
  return (
    <nav>
      <NavItems isScrolled={props.isScrolled}/>
      <button className="block md:hidden p-4 ml-3" onClick={props.onMenuToggle}>
        <HiMenu className="text-2xl" />
      </button>
    </nav>
  );
};

export default Nav;
