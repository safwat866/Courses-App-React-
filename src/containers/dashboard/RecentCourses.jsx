import React from "react";
import { Link } from "react-router-dom";
import CourseImage from "../../assets/Internships.jpg";
import { AiOutlinePlus } from "react-icons/ai";

const RecentCourses = () => {
  return (
    <div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Recent Courses</h2>
        <div className="flex flex-wrap gap-5 mt-8">
          {[1, 2, 3].map((course) => (
            <Link
              key={course}
              className="flex-1 rounded-lg overflow-hidden block min-w-[250px]"
              to="/dashboard/courses"
            >
              <div>
                <img src={CourseImage} alt="course Image" className="w-full"/>
              </div>
              <div>
                <h2 className="text-2xl font-bold my-1">Course Name</h2>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, sit?
                </p>
              </div>
            </Link>
          ))}
          <Link
            className="flex items-center justify-center flex-1 border-dashed border-2 rounded-lg bg-gray-200/50 border-slate-500 hover:bg-gray-200 min-w-[250px] min-h-[300px]"
            to="/dashboard/courses"
          >
            <AiOutlinePlus />
            Show more!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentCourses;
