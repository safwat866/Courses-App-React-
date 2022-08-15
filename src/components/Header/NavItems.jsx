import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import user from "../../assets/user.webp";

const NavItems = (props) => {
  return (
    <ul className="hidden md:flex items-center">
      <li>
        <NavLink
          to="/"
          exact={true}
          activeClassName={
            "active-nav-item " + (props.isScrolled ? "scrolled" : "")
          }
          className={
            "px-5 h-8  flex items-center  mx-2 rounded-full nav-item-hover-animation transition-all duration-300 " +
            (props.isScrolled ? "nav-item-scrolled" : "")
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/courses/"
          activeClassName={
            "active-nav-item " + (props.isScrolled ? "scrolled" : "")
          }
          className={
            "px-5 h-8 flex items-center mx-2 rounded-full nav-item-hover-animation transition-all duration-300 " +
            (props.isScrolled ? "nav-item-scrolled" : "")
          }
        >
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Internships/"
          activeClassName={
            "active-nav-item " + (props.isScrolled ? "scrolled" : "")
          }
          className={
            "px-5 h-8 flex items-center mx-2 rounded-full nav-item-hover-animation transition-all duration-300 " +
            (props.isScrolled ? "nav-item-scrolled" : "")
          }
        >
          Internships
        </NavLink>
      </li>
    </ul>
  );
};

export default NavItems;
