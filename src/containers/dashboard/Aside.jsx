import React from "react";
import { NavLink } from "react-router-dom";
import { HiHome, HiBookmark, HiOutlineLogout } from "react-icons/hi";

const Aside = () => {
  return (
    <div className="basis-[20%] min-w-[300px] p-10 fixed -translate-x-full lg:static transition-transform bg-white h-screen shadow lg:translate-x-0 lg:shadow-none">
      <div className="">
        <h1 className="text-3xl font-bold">Forsa</h1>
      </div>
      <div className="h-full">
        <ul className="pt-16">
          <li className="mb-3">
            <NavLink
              to="/dashboard"
              exact
              activeClassName="!bg-black !text-white"
              className="py-3 px-5 rounded-xl text-black flex bg-black/0  items-center hover:bg-black/100 hover:text-white transition-colors"
            >
              <HiHome className="mr-3 text-xl" />
              Home
            </NavLink>
          </li>
          <li className="mb-3">
            <NavLink
              to="/dashboard/courses"
              activeClassName="!bg-black !text-white"
              className="py-3 px-5 rounded-xl text-black flex bg-black/0  items-center hover:bg-black/100 hover:text-white transition-colors"
            >
              <HiBookmark className="mr-3 text-xl" />
              My Courses
            </NavLink>
          </li>
          <li className="mb-3">
            <NavLink
              to="/"
              exact
              activeClassName="!bg-black !text-white"
              className="py-3 px-5 rounded-xl text-black flex bg-black/0  items-center hover:bg-red-600/100 hover:text-white transition-colors"
            >
              <HiOutlineLogout className="mr-3 text-xl" />
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;
