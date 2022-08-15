import React, { useState } from "react";
import { Link } from "react-router-dom";
import CourseImage from "../../assets/course_image.jpg";
import Btn from "../../components/UI/Btn";

const Courses = (props) => {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 8, 9, 0].map((course) => {
          return (
            <Link to="/courses/FrontEnd" key={course}>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={CourseImage}
                  alt="course Image"
                  className="h-48 object-cover w-full"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold my-1">Course Name</h2>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, sit?
                </p>
                <button
                  className="btn !rounded-lg block w-full mt-2"
                  onClick={(e) => {
                    props.onDelete(e);
                  }}
                >
                  Delete
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
