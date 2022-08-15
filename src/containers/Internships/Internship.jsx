import React from "react";
import CourseImage from "../../assets/course_image.jpg";
import { Link } from "react-router-dom";

const Internship = ({ name, descreption, id }) => {
  return (
    <Link to={"/Internships/" + name} aria-label="internship">
      <div>
        <img
          src={CourseImage}
          alt="course"
          className="h-[200px] w-[100%] object-cover "
        />
      </div>
      <div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{descreption}</p>
      </div>
    </Link>
  );
};

export default Internship;
