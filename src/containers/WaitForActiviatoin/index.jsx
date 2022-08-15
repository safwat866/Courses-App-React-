import React from "react";
import { Link } from "react-router-dom";
import Wait from "../../assets/wait.jpg";

const WaitForActivation = () => {
  return (
    <div className="py-16 flex items-center justify-center">
      <div className="p-6 shadow-lg rounded-lg text-center w-full max-w-[885px] ">
        <div className="flex flex-col lg:flex-row">
          <div className="flex justify-center">
            <img src={Wait} alt="wait" className="w-96 max-w-full" />
          </div>
          <div className="lg:mt-20">
            <h2 className="text-2xl font-bold mb-3">
              Thank you for using Forsa web store!
            </h2>
            <p className="text-gray-500 w-96 mx-auto">
              please wait until the admins accept you as an instructor in Forsa♥
            </p>
            <Link to="/courses" className="btn btn-fill block mt-4 w-fit mx-auto">
              Explore Some Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitForActivation;
