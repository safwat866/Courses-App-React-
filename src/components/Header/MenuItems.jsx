import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import user from "../../assets/user.webp";

const MenuItem = (props) => {
  return (
    <ul className="block text-black p-4">
      <li>
        <NavLink
          to="/"
          exact
          className="p-3 block hover:bg-gray-200 rounded mb-2 hover:pl-6 transition-all"
          activeClassName="bg-gray-200"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/courses"
          className="p-3 block hover:bg-gray-200 rounded mb-2 hover:pl-6 transition-all"
          activeClassName="bg-gray-200"
        >
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Internships"
          className="p-3 block hover:bg-gray-200 rounded mb-2 hover:pl-6 transition-all"
          activeClassName="bg-gray-200 "
        >
          InternShips
        </NavLink>
      </li>
      <li>
        <button
          className="btn !rounded-full !px-6 !py-2 block mt-4 w-full text-center"
          onClick={() => {
            props.toggleMenuHanlder();
          }}
        >
          Getting Started
        </button>
      </li>
    </ul>
  );
};

export default MenuItem;
