import React from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center -mt-1">
      <div>
        <h2 className="text-xl md:text-3xl font-bold">Forsa Courses Dashboard!</h2>
      </div>
      <div>
        <ul className="flex items-center">
          <li>
            <Link
              to="/dashboard/upload-course"
              className="p-3 rounded-xl bg-black text-white text-sm flex "
            >
              <AiOutlinePlus className="text-xl mr-2" />
              Upload Course
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
