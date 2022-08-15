import React, { useState, useEffect } from "react";
import courses from "../../assets/courses.png";
import Btn from "../../components/UI/Btn";
import ThunderStorm from "../../assets/thunderstorm.png";

const Main = () => {
  return (
    <div
      className="bg-slate-primary text-white background-animation min-h-[85vh] flex items-center justify-center bubbles relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(45deg, #000, 20%, #0000)",
      }}
    >
      <div className="container px-5 py-9 mx-auto relative z-10">
        <div className="pb-10">
          <h2 className="md:text-6xl text-3xl text-center font-bold mx-auto max-w-[870px] tracking-wide !leading-[1.1] text-gray-100">
            Grow Your Skills to Advance Your Career Path.
          </h2>
          <p className="text-center text-gray-400 mt-10 max-w-[650px] mx-auto">
            Explore more than 10k courses in Forsa App for free with the most
            professional instractors in the world!
          </p>
          <div className="mt-10">
            <form className="relative w-[85%] mx-auto">
              <input
                type="search"
                name="course"
                id="course-search"
                placeholder="search for more than 10k courses for free"
                className="w-full p-4 rounded-full pr-32 outline-none text-black focus-animation focus-lg transition-shadow duration-300"
              />
              <button
                type="submit"
                className="btn !px-3 md:!px-8 absolute right-0 h-full !rounded-l-none inline btn-fill"
              >
                search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
