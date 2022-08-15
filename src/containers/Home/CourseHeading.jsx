import React from "react";

const CourseHeading = (props) => {
  return (
    <div className="text-center mb-10">
      <h3 className=" text-4xl md:text-6xl font-bold text-gray-400">{props.name}</h3>
      <p className="font-bold text-gray-500 text-sm">{props.description}</p>
    </div>
  );
};

export default CourseHeading;
